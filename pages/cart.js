import React, { useContext, useEffect, useState } from "react";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 40px 0 0 0;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1.2fr 0.8fr;
    }
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const ProductInfoCell = styled.td`
    padding: 10px 0px;
`;

const ProductImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    border-radius: 10px;
    img {
        max-width: 80px;
        max-height: 80px;
    }
`;

const QuantityLabel = styled.label`
    padding: 0px 3px;
`;

const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CityBox = styled.div`
    display: flex;
    gap: 5px;
`;

const StyledParagraph = styled.p`
    color: #333;
    font-size: 1.1em;
    line-height: 1.6;
    margin-top: 20px;
`;

const Cart = () => {
    const { cartProducts, addProduct, removeProduct, clearCart } =
        useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [name, setName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post("/api/cart", { ids: cartProducts }).then((response) => {
                setProducts(response.data);
            });
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            window.location.href.includes("success")
        ) {
            setIsSuccess(true);
            clearCart();
            axios.get("/api/orders").then((response) => {
                setOrders(response.data);
            });
        }
    }, []);

    const addAdditionalProduct = (id) => {
        addProduct(id);
    };

    const removeAdditionalProduct = (id) => {
        removeProduct(id);
    };

    async function goToPayment() {
        const response = await axios.post("/api/checkout", {
            name,
            email,
            city,
            postCode,
            streetAddress,
            country,
            cartProducts,
        });
        if (response.data.url) {
            window.location = response.data.url;
        }
    }

    let total = 0;
    for (const ProductId of cartProducts) {
        const product = products.find((p) => p._id === ProductId);
        const price = product?.price || 0;
        total += price;
    }

    const latestOrder = orders[0] || {};
    const firstName =
        latestOrder && latestOrder.name ? latestOrder.name.split(" ")[0] : null;

    if (isSuccess) {
        return (
            <>
                <Header />
                <Center>
                    <ColWrapper>
                        <Box>
                            <StyledParagraph>
                                thank you <strong>{firstName}</strong>, for
                                placing an order with us.
                                <br />
                                <br />
                                <span>
                                    We are pleased to confirm the receipt of
                                    your order with ID #{latestOrder?._id}, on{" "}
                                    {new Date(
                                        latestOrder?.createdAt
                                    ).toLocaleDateString()}
                                    .
                                </span>
                                <br />
                                <br />
                                <span>
                                    Your order is now being processed and we
                                    will ensure its prompt dispatch.
                                </span>
                            </StyledParagraph>
                        </Box>
                    </ColWrapper>
                </Center>
            </>
        );
    }

    return (
        <div>
            <Header />
            <Center>
                <ColWrapper>
                    <Box>
                        <h2>Cart</h2>
                        {!cartProducts.length && <div>Your cart is empty</div>}
                        {products.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product._id}>
                                            <ProductInfoCell>
                                                <ProductImageBox>
                                                    <img
                                                        src={product.images[0]}
                                                        alt={product.title}
                                                    />
                                                </ProductImageBox>
                                                {product.title}
                                            </ProductInfoCell>
                                            <td>
                                                <FlexCenter>
                                                    <Button
                                                        onClick={() =>
                                                            removeAdditionalProduct(
                                                                product._id
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </Button>
                                                    <QuantityLabel>
                                                        {
                                                            cartProducts.filter(
                                                                (id) =>
                                                                    id ===
                                                                    product._id
                                                            ).length
                                                        }
                                                    </QuantityLabel>
                                                    <Button
                                                        onClick={() =>
                                                            addAdditionalProduct(
                                                                product._id
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                </FlexCenter>
                                            </td>
                                            <td>
                                                $
                                                {cartProducts.filter(
                                                    (id) => id === product._id
                                                ).length * product.price}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>${total}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}
                    </Box>
                    {!!cartProducts.length && (
                        <Box>
                            <h2>Order Information</h2>
                            <Input
                                type="text"
                                placeholder="Name"
                                value={name}
                                name="name"
                                onChange={(ev) => setName(ev.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="Street Address"
                                value={streetAddress}
                                name="streetAddress"
                                onChange={(ev) =>
                                    setStreetAddress(ev.target.value)
                                }
                            />
                            <CityBox>
                                <Input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    name="city"
                                    onChange={(ev) => setCity(ev.target.value)}
                                />
                                <Input
                                    type="text"
                                    placeholder="Post code"
                                    value={postCode}
                                    name="postCode"
                                    onChange={(ev) =>
                                        setPostCode(ev.target.value)
                                    }
                                />
                            </CityBox>
                            <Input
                                type="text"
                                placeholder="Country"
                                value={country}
                                name="country"
                                onChange={(ev) => setCountry(ev.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="E-mail"
                                value={email}
                                name="email"
                                onChange={(ev) => setEmail(ev.target.value)}
                            />
                            <input
                                type="hidden"
                                value={cartProducts.join(",")}
                                name="products"
                            />
                            <Button
                                $block
                                $primary
                                $backgroundColor="black"
                                onClick={goToPayment}
                            >
                                Continue to Payment
                            </Button>
                        </Box>
                    )}
                </ColWrapper>
            </Center>
        </div>
    );
};

export default Cart;
