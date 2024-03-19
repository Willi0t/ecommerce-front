import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const handler = async (req, res) => {
    console.log("req.body:", req.body);
    if (req.method !== "POST") {
        res.json("should be a post request");
        return;
    }

    const {
        name,
        email,
        city,
        postalCode,
        streetAdress,
        country,
        cartProducts,
    } = req.body;

    await mongooseConnect;
    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];
    const productsInfo = await Product.find({ _id: uniqueIds });

    let line_items = [];
    for (const productId of uniqueIds) {
        const productinfo = productsInfo.find(
            (p) => p._id.toString() === productId
        );
        const quantity =
            productsIds.filter((id) => id === productId)?.length || 0;
        if (quantity > 0) {
            line_items.push({
                quantity,
                price_data: {
                    currency: "USD",
                    product_data: { name: productinfo.title },
                    unit_amount: quantity * productinfo.price * 100,
                },
            });
        }
    }

    // Check if line_items is empty
    if (line_items.length === 0) {
        res.status(400).json({
            error: "No products were found for the provided IDs.",
        });
        return;
    }

    const orderDoc = await Order.create({
        line_items,
        name,
        email,
        city,
        postalCode,
        streetAdress,
        country,
        paid: false,
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        customer_email: email,
        success_url: process.env.PUBLIC_URL + "/cart?success=1",
        cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
        metadata: { orderId: orderDoc._id.toString() },
    });

    res.json({ url: session.url });
};

export default handler;
