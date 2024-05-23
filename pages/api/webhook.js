import { mongooseConnect } from "@/lib/mongoose";
import { parse } from "url";
import { buffer } from "micro";
import Stripe from "stripe";
import getRawBody from "raw-body";
import { Order } from "@/models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET);
const endpointSecret = process.env.ENDPOINT_SECRET;

export default async function handler(req, res) {
    await mongooseConnect();

    const sig = req.headers["stripe-signature"];

    try {
        // Retrieve the raw request body
        const buf = await getRawBody(req);

        // Parse the URL to get the rawPath
        const { pathname: rawPath } = parse(req.url);

        console.log("Received request. Signature:", sig);

        // Construct the event
        const event = stripe.webhooks.constructEvent(
            buf,
            sig,
            endpointSecret,
            rawPath
        );

        console.log("Constructed event:", event);

        // Compare Signatures
        const calculatedSig = stripe.webhooks.generateTestHeaderString({
            payload: buf.toString(),
            secret: endpointSecret,
        });

        if (calculatedSig !== sig) {
            throw new Error("Signatures do not match");
        }

        // Handle the event
        switch (event.type) {
            case "checkout.session.completed":
                const data = event.data.object;
                const orderId = data.metadata.orderId;
                const paid = data.payment_status === "paid";
                if (orderId && paid) {
                    await Order.findByIdAndUpdate(orderId, {
                        paid: true,
                    });
                    console.log("Order updated successfully:", orderId);
                }
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        res.status(200).send("ok");
    } catch (err) {
        console.error("Webhook Error:", err);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
}

export const config = {
    api: { bodyParser: false },
};
