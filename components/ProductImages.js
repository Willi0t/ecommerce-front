import React from "react";
import styled from "styled-components";

const FeaturedImage = styled.img`
    height: 180px;
    max-width: 100%;
`;

const GalleryImages = styled.img`
    max-height: 50px;
    max-width: 70px;
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
                        active={image === activeImage}
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
