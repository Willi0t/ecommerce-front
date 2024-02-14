import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const dotenv = require("dotenv");
dotenv.config();

export default function HomePage({ product }) {
    console.log(product);
    return (
        <div>
            <Header></Header>
            <Featured></Featured>
        </div>
    );
}

export const getServerSideProps = async () => {
    const featuredProductId = "65ccc710af0f0d54f024b6f7";
    await mongooseConnect();
    const product = await Product.findById(featuredProductId);
    return {
        props: { product: JSON.stringify(product) },
    };
};
