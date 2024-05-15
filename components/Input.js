import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    margin: 0 0 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;

const Input = (props) => {
    return <StyledInput {...props} />;
};

export default Input;
