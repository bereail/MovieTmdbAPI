import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
    console.log(image); // Check if the image URL is correct
    return (
        <Wrapper image={image || 'path_to_default_image.jpg'}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    );
};

export default HeroImage;
