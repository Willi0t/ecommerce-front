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

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media screen and (min-width: 768px) {
        grid-template-columns: 0.8fr 1.2fr;
    }
    gap: 40px;
    margin: 40px 0;
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const PriceText = styled.span`
    font-size: 1.5rem;
`;

const ProductPage = ({ product }) => {
    const { addProduct } = useContext(CartContext);
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
                        <p>{product.description}</p>
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