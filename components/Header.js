import React, { useContext, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { CartContext } from "./CartContext";
import HamburgerIcon from "@/assets/icons/HamburgerIcon";

const StyledHeader = styled.header`
    background-color: #222;
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

const NavLink = styled(Link)`
    display: block;
    color: #aaa;
    text-decoration: none;
    /* padding: 5px; */
`;

const StyledNav = styled.nav`
    display: block;
    width: 100%;
    gap: 15px;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    padding: 20px;
    background-color: rgba(34, 34, 34, 0.85);
    backdrop-filter: blur(10px);
    transform: translateX(
        ${(props) => (props.MobilenavigationActive ? "0" : "-100%")}
    );
    transition: transform 0.3s ease-in-out;

    @media screen and (min-width: 768px) {
        width: auto;
        display: flex;
        position: static;
        transform: none;
        backdrop-filter: none;
        background-color: transparent; // Remove effect for larger screens
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: 0;
    color: #fff;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

function Header() {
    const { cartProducts } = useContext(CartContext);
    const [MobilenavigationActive, setMobileNavigationActive] = useState(false);

    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={"/"}>Ecommerce</Logo>
                    <StyledNav MobilenavigationActive={MobilenavigationActive}>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/products"}>All Products</NavLink>
                        <NavLink href={"/categories"}>Categories</NavLink>
                        <NavLink href={"/Account"}>Account</NavLink>
                        <NavLink href={"/cart"}>
                            Cart ({cartProducts.length})
                        </NavLink>
                    </StyledNav>
                    <NavButton
                        onClick={() =>
                            setMobileNavigationActive((prev) => !prev)
                        }
                    >
                        <HamburgerIcon />
                    </NavButton>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}

export default Header;
