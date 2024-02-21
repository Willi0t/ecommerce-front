import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 0.8rem;
    text-decoration: none;
    cursor: pointer;
    svg {
        height: 0.8rem;
        // top, right, bottom, left
        margin: 0 5px 0 0;
    }

    ${(props) =>
        props.size === "l" &&
        css`
            font-size: 1.2rem;
            padding: 10px 20px;
            svg {
                height: 20px;
            }
        `}

    ${(props) =>
        props.primary === 1 &&
        css`
            background-color: var(--purple-custom);
            color: #fff;
            border: 1px solid var(--purple-custom);
        `}

    ${(props) =>
        props.secondary === 1 &&
        !props.outline &&
        css`
            background-color: #fff;
            color: #000;
            border: 1px solid #fff;
        `}

    ${(props) =>
        props.secondary === 1 &&
        props.outline &&
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
