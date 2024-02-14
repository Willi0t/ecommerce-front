import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header>
            <Link href={"/"}>Ecommerce</Link>
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>All Products</Link>
                <Link href={"/categories"}>Categories</Link>
                <Link href={"/Account"}>Account</Link>
                <Link href={"/cart"}>Cart</Link>
            </nav>
        </header>
    );
};

export default Header;
