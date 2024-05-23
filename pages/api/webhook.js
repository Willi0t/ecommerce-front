// Import necessary modules and functions
import { mongooseConnect } from "@/lib/mongoose";
import { parse } from "url";
import Stripe from "stripe";
import getRawBody from "raw-body";
import { Order } from "@/models/Order";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET);
const endpointSecret = process.env.ENDPOINT_SECRET;

// Define the webhook handler function
export default async function handler(req, res) {
    // Connect to MongoDB
    await mongooseConnect();

    // Extract the signature from request headers
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

        // Generate the expected signature
        const calculatedSig = stripe.webhooks.generateTestHeaderString({
            payload: buf.toString(),
            secret: endpointSecret,
        });

        // Compare the calculated signature with the received signature
        if (calculatedSig !== sig) {
            throw new Error("Signatures do not match");
        }

        // Handle the event based on its type
        switch (event.type) {
            case "checkout.session.completed":
                const data = event.data.object;
                const orderId = data.metadata.orderId;
                const paid = data.payment_status === "paid";
                if (orderId && paid) {
                    // Update the order status in the database
                    await Order.findByIdAndUpdate(orderId, {
                        paid: true,
                    });
                    console.log("Order updated successfully:", orderId);
                }
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Respond with a success status
        res.status(200).send("ok");
    } catch (err) {
        // Handle errors and respond with an error status
        console.error("Webhook Error:", err);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
}

// Configure the API route to disable body parsing
export const config = {
    api: { bodyParser: false },
};
