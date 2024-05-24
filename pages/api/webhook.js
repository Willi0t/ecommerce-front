import { mongooseConnect } from "@/lib/mongoose";
import Stripe from "stripe";
import { buffer } from "micro";
import { Order } from "@/models/Order";

const stripe = new Stripe(process.env.STRIPE_SK);
const endpointSecret = process.env.ENDPOINT_SECRET;

export const config = {
    api: { bodyParser: false },
};

export default async function handler(req, res) {
    await mongooseConnect();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
        const buf = await buffer(req);
        console.log("Received request. Signature:", sig);
        console.log("Raw body:", buf.toString());

        event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);

        console.log("Constructed event:", event);

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
