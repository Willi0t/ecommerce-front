import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { Product } from "@/models/Product";
import React from "react";
import { mongooseConnect } from "@/lib/mongoose";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    @media screen and (min-width: 768px) {
        width: 540px;
        padding: 0px 50px 0px 50px;
    }
`;

const ItemDescription = styled.p`
    width: 100%;
    height: auto;
    font-size: 0.9rem;
`;

const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 40px 0;
    @media screen and (min-width: 768px) {
        grid-template-columns: 0.8fr 1.2fr;
        gap: 40px;
    }
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (min-width: 768px) {
        margin-top: 10px;
    }
`;

const PriceText = styled.span`
    font-size: 1.5rem;
`;

const ProductPage = ({ product }) => {
    const { addProduct } = useContext(CartContext);
    return (
        <>
            <Header />
            <ColWrapper>
                <WhiteBox>
                    <ProductImages images={product.images} />
                </WhiteBox>
                <DescriptionContainer>
                    <Title>{product.title}</Title>
                    <ItemDescription>{product.description}</ItemDescription>
                    <PriceRow>
                        <div>
                            <PriceText>${product.price}</PriceText>
                        </div>

                        <Button
                            $primary
                            $margin="0 5px 0px 0"
                            onClick={() => addProduct(product._id)}
                        >
                            add to cart
                        </Button>
                    </PriceRow>
                </DescriptionContainer>
            </ColWrapper>
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
