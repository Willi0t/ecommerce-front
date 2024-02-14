import React from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const CulumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
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

const Featured = () => {
    return (
        <Bg>
            <Center>
                <CulumnsWrapper>
                    <Column>
                        <div>
                            <Title>Pro anywhere</Title>
                            <Description>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,
                            </Description>
                            <ButtonsWrapper>
                                <Button outline secondary>
                                    Read more
                                </Button>
                                <Button primary>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                        />
                                    </svg>
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
