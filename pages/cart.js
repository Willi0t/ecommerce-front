import React, { useContext, useEffect, useState } from "react";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import axios from "axios";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    //top right bottom left
    margin: 40px 0 0 0;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const cart = () => {
    const { cartProducts } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post("/api/cart", { ids: cartProducts }).then((response) => {
                setProducts(response.data);
            });
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    return (
        <div>
            <Header />
            <Center>
                <ColWrapper>
                    <Box>
                        <h2>Cart</h2>
                        {!cartProducts?.length && (
                            <div> your cart is empty</div>
                        )}
                        {products?.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((products) => (
                                        <tr>
                                            <td>{products.title}</td> :
                                            <td>
                                                {
                                                    cartProducts.filter(
                                                        (id) =>
                                                            id === products._id
                                                    ).length
                                                }
                                            </td>
                                            <td>price</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                            <h2>order information</h2>
                            <input type="text" placeholder="Address" />
                            <input type="text" placeholder="Address 2" />
                            <Button $block $primary $backgroundColor="black">
                                continue to payment
                            </Button>
                        </Box>
                    )}
                </ColWrapper>
            </Center>
        </div>
    );
};

export default cart;
