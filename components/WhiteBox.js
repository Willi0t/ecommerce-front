import React from "react";
import styled from "styled-components";

const WhiteBox = styled.div`
    width: 80%;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    @media screen and (min-width: 768px) {
        width: 500px;
        height: 300px;
    }
`;

export default WhiteBox;
