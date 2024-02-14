import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();

    if (method === "GET") {
        if (req.query?.id) {
            res.json(await Product.findOne({ _id: req.query.id }));
        } else {
            res.json(await Product.find());
        }
    }
}

export default handler;
