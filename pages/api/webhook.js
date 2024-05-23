import { mongooseConnect } from "@/lib/mongoose";
import { buffer } from "micro";
const stripe = require("stripe")(process.env.STRIPE_SECRET);
import { Order } from "@/models/Order";
require("dotenv").config();

// Use dotenv to load environment variables
const endpointSecret = process.env.STRIPE_SECRET;

const handler = async (req, res) => {
    await mongooseConnect();

    // Log the raw request body
    console.log("Raw Request Body:", req.body);

    // Log the request headers
    console.log("Request Headers:", req.headers);

    const sig = req.headers["stripe-signature"];

    let event;

    try {
        const reqBuffer = await buffer(req);
        // Log the signature
        console.log("Signature:", sig);
        // Log the parsed request body
        console.log("Parsed Request Body:", reqBuffer.toString("utf8"));

        // Construct the event
        event = stripe.webhooks.constructEvent(
            reqBuffer.toString("utf8"),
            sig,
            endpointSecret
        );
    } catch (err) {
        // Log any errors that occur during signature verification
        console.error("Signature Verification Error:", err);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    switch (event.type) {
        case "checkout.session.completed":
            const data = event.data.object;
            const orderId = data.metadata.orderId;
            const paid = data.payment_status === "paid";
            if (orderId && paid) {
                await Order.findByIdAndUpdate(orderId, {
                    paid: true,
                });
            }
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send("ok");
};

export const config = { api: { bodyParser: false } };
