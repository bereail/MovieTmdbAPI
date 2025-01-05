import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Wrapper, Image } from "./Actor.styles";
import no_image from '../../images/no_image.jpg';

const Actor = ({ name = "Unknown", character = "Unknown", imageUrl }) => (
    <Wrapper>
        <Image 
            src={imageUrl || no_image} // Fallback to no_image if imageUrl is undefined or null
            alt="actor-thumb" 
        />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    name: PropTypes.string, 
    character: PropTypes.string,
    imageUrl: PropTypes.string,
};

Actor.defaultProps = {
    imageUrl: no_image, // Fallback to a default image
};

export default Actor;
