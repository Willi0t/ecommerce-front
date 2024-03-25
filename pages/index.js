// Imports remain unchanged
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const dotenv = require("dotenv");
dotenv.config();

// HomePage component now expects a prop named featuredProduct
export default function HomePage({ featuredProduct, newProducts }) {
    return (
        <div>
            <Header></Header>
            <Featured featuredProduct={featuredProduct}></Featured>
            <NewProducts products={newProducts} />
        </div>
    );
}

export const getServerSideProps = async () => {
    const featuredProductId = "65ccc710af0f0d54f024b6f7";
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {
        sort: { id: -1 },
        limit: 10,
    });
    if (!featuredProduct) {
        return { props: { featuredProduct: null } };
    }
    return {
        props: {
            featuredProduct: JSON.stringify(featuredProduct),
            newProducts: JSON.parse(JSON.stringify(newProducts)),
        },
    };
};
