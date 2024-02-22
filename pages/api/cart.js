import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const cartHandler = async (req, res) => {
    await mongooseConnect();
    const ids = req.body.ids;
    res.json(await Product.find({ _id: { $in: ids } }));
};

export default cartHandler;
