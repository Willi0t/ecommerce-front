import { mongooseConnect } from "@/lib/mongoose";
import { buffer } from "micro";
import { Order } from "@/models/Order";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//revert

const endpointSecret =
    "whsec_2c323ddb48369c6610d7294e70e680d8cd3ab467c43b085792dce1fd590ed835";

const handler = async (req, res) => {
    await mongooseConnect();

    const sig = req.headers["stripe-signature"];

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            await buffer(req),
            sig,
            endpointSecret
        );
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
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
            }
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send("ok");
};

export default handler;

export const config = {
    api: { bodyParser: false },
};
