import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { CartContext } from "./CartContext";

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
    padding: 20px 0;
`;

const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`;

function Header() {
    const { cartProducts } = useContext(CartContext);

    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={"/"}>Ecommerce</Logo>
                    <StyledNav>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/products"}>All Products</NavLink>
                        <NavLink href={"/categories"}>Categories</NavLink>
                        <NavLink href={"/Account"}>Account</NavLink>
                        <NavLink href={"/cart"}>
                            ({cartProducts.length})
                        </NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}

export default Header;
