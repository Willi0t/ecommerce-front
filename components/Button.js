import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
    display: flex;
    align-items: center;
    border: 0;
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: inherit;
    text-decoration: none;
    @media screen and (min-width: 768px) {
        padding: 5px 15px;
    }

    ${(props) =>
        props.$backgroundColor &&
        css`
            background-color: ${props.$backgroundColor} !important;
            border: 1px solid ${props.$backgroundColor} !important;
        `}
    cursor: pointer;

    svg {
        height: 0.8rem;
        ${(props) =>
            props.$margin &&
            css`
                margin: ${props.$margin};
            `}
    }

    ${(props) =>
        props.$size === "l" &&
        css`
            font-size: 1.2rem;
            padding: 10px 20px;
            svg {
                height: 20px;
            }
        `}

    ${(props) =>
        props.$primary &&
        !props.$outline &&
        css`
            background-color: var(--purple-custom);
            color: #fff;
            border: 1px solid var(--purple-custom);
        `}

    ${(props) =>
        props.$block &&
        css`
            display: block;
            width: 100%;
        `}

    ${(props) =>
        props.$primary &&
        props.$outline &&
        css`
            background-color: transparent;
            color: var(--purple-custom);
            border: 1px solid var(--purple-custom);
        `}

    ${(props) =>
        props.$secondary &&
        !props.$outline &&
        css`
            background-color: #fff;
            color: #000;
            border: 1px solid #fff;
        `}

    ${(props) =>
        props.$secondary &&
        props.$outline &&
        css`
            background-color: transparent;
            color: #fff;
            border: 1px solid white;
        `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

const Button = ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
