import React, { createContext, useEffect, useState, useMemo } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const ls = useMemo(
        () => (typeof window !== "undefined" ? window.localStorage : null),
        []
    );

    const [cartProducts, setCartProducts] = useState([]);

    // Load initial cart from localStorage only on client-side
    useEffect(() => {
        try {
            const localCart = ls?.getItem("cart");
            if (localCart) {
                setCartProducts(JSON.parse(localCart));
            }
        } catch (error) {
            console.error("Failed to load cart from local storage:", error);
        }
    }, [ls]);

    useEffect(() => {
        try {
            if (cartProducts.length > 0) {
                ls?.setItem("cart", JSON.stringify(cartProducts));
            } else {
                ls?.removeItem("cart");
            }
        } catch (error) {
            console.error("Failed to save cart to local storage:", error);
        }
    }, [cartProducts, ls]);

    function addProduct(productId) {
        setCartProducts((prev) => [...prev, productId]);
    }

    const removeProduct = (productId) => {
        setCartProducts((prev) => prev.filter((id) => id !== productId));
    };

    function clearCart() {
        setCartProducts([]);
    }

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                addProduct,
                removeProduct,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
