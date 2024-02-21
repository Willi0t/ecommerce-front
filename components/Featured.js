import React from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIconhollow from "@/assets/icons/CartIconhollow ";
import CartIconSolid from "@/assets/icons/CartIconSolid";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const CulumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img {
        max-width: 100%;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    // top, right, bottom, left
    margin: 25px 0 0 0;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

const Description = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

const Featured = ({ featuredProduct }) => {
    const featuredProductObj = JSON.parse(featuredProduct);
    return (
        <Bg>
            <Center>
                <CulumnsWrapper>
                    <Column>
                        <div>
                            <Title>{featuredProductObj.title}</Title>
                            <Description>
                                {featuredProductObj.description} <br />,
                            </Description>
                            <ButtonsWrapper>
                                <ButtonLink
                                    outline={1}
                                    secondary={1}
                                    href={"/products/" + featuredProductObj._id}
                                >
                                    Read more
                                </ButtonLink>
                                <Button secondary={1} margin="0 5px 0 0">
                                    <CartIconSolid />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://149426355.v2.pressablecdn.com/wp-content/uploads/2021/10/mbp-2021-bbedit-lede.png"></img>
                    </Column>
                </CulumnsWrapper>
            </Center>
        </Bg>
    );
};

export default Featured;
