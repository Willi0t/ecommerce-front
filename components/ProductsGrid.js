import React from "react";
import styled from "styled-components";
import ProductBox from "./ProductBox";

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 20px 0 0 0;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const ProductsGrid = ({ products }) => {
    return (
        <ProductGrid>
            {products?.length > 0 &&
                products.map((product) => (
                    <ProductBox {...product} key={product._id} />
                ))}
        </ProductGrid>
    );
};

export default ProductsGrid;
