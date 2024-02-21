import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartIconSolid from "@/assets/icons/CartIconSolid";
import Link from "next/link";

const ProductWrapper = styled.div`
    // top, right, bottom, left
    margin: 20px 0 0 0;
`;

const ProductContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    border-radius: 10px;
    img {
        max-width: 100%;
        //height - padding
        max-height: calc(120px - 20px);
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    margin: 0;
    font-size: 0.8rem;
    color: inherit;
    text-decoration: none;
`;

const ProductInfoBox = styled.div`
    margin: 5px 0 0 0;
`;

const PriceBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px 0 0 0;
`;

const Price = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
`;

const ProductBox = ({ _id, title, description, price, images }) => {
    const url = "/product" + _id;
    return (
        <ProductWrapper>
            <ProductContainer href={url}>
                <div>
                    <img src={images[0]} alt=""></img>
                </div>
            </ProductContainer>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceBox>
                    <Price>${price}</Price>
                    <Button primary={1} outline={1} margin="0 5px 0px 0">
                        add to cart
                    </Button>
                </PriceBox>
            </ProductInfoBox>
        </ProductWrapper>
    );
};

export default ProductBox;
