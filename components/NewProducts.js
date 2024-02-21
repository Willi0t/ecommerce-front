import React from "react";
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    //top right bottom left
    padding: 20px 0 0 0 0;
`;

const NewProducts = ({ products }) => {
    const newProductObj = JSON.parse(products);
    console.log(newProductObj);

    return (
        <div>
            <Center>
                <ProductsGrid>
                    {newProductObj?.length > 0 &&
                        newProductObj.map((product) => {
                            <ProductBox {...product} key={product._id} />;
                        })}
                </ProductsGrid>
            </Center>
        </div>
    );
};

export default NewProducts;
