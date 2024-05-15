import React from "react";
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
    font-weight: normal;
    margin: 0;
    font-size: 2rem;
    margin: 20px 0 0 0;
`;

const NewProducts = ({ products }) => {
    return (
        <div>
            <Center>
                <Title>New Arivals</Title>
                <ProductsGrid products={products} />
            </Center>
        </div>
    );
};

export default NewProducts;
