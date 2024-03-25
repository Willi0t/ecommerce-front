import React from "react";
import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const Title = styled.h1`
    font-size: 1.5em;
`;

const productsPage = ({ products }) => {
    return (
        <>
            <Header />
            <Center>
                <Title>Products</Title>
                <ProductsGrid products={products} />
            </Center>
        </>
    );
};

export const getServerSideProps = async () => {
    await mongooseConnect();
    const products = await Product.find({}, null, { sort: { _id: -1 } });
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        },
    };
};

export default productsPage;
