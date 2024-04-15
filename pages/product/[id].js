import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { Product } from "@/models/Product";
import React from "react";
import { mongooseConnect } from "@/lib/mongoose";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media screen and (min-width: 768px) {
        grid-template-columns: 0.8fr 1.2fr;
    }
    gap: 40px;
    margin: 40px 0;
`;

const ProductPage = ({ product }) => {
    return (
        <>
            <Header />
            <Center>
                <ColWrapper>
                    <WhiteBox>
                        <ProductImages images={product.images} />
                    </WhiteBox>
                    <div>
                        <Title>{product.title}</Title>
                    </div>
                </ColWrapper>
            </Center>
        </>
    );
};

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        },
    };
}

export default ProductPage;
