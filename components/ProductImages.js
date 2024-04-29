import React from "react";
import styled from "styled-components";

const FeaturedImage = styled.img`
    height: 130px;
    max-width: 100%;
    @media screen and (min-width: 768px) {
        height: 180px;
        max-width: 100%;
    }
`;

const GalleryImages = styled.img`
    max-height: 50px;
    max-width: 60px;
    @media screen and (min-width: 768px) {
        max-height: 60px;
        max-width: 84px;
    }
`;

const FeaturedImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageGallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-grow: 0;
    margin-top: 20px;
`;

const ImageButtons = styled.button`
    ${(props) => (props.$active ? `opacity: 1;` : `opacity: 0.8;`)}
    max-height: 100%;
    max-width: 100%;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const ProductImages = ({ images }) => {
    const [activeImage, setActiveImage] = React.useState(images?.[0]);
    return (
        <>
            <FeaturedImageWrapper>
                <FeaturedImage src={activeImage} />
            </FeaturedImageWrapper>
            <ImageGallery>
                {images.map((image) => (
                    <ImageButtons
                        key={image}
                        $active={image === activeImage}
                        onClick={() => setActiveImage(image)}
                    >
                        <GalleryImages src={image} alt="" />
                    </ImageButtons>
                ))}
            </ImageGallery>
        </>
    );
};

export default ProductImages;
