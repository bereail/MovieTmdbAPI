import React from "react";
import PropTypes from "prop-types";

//styles
import styles, { Wrapper, Content, Text } from './MovieInfo.styles';
//components
import Thumb from "../Thumb";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//image
import no_image from '../../images/no_image.jpg';

const MovieInfo = ({ movie }) => {
    const directors = movie.directors || [];  // Ensuring directors exists

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : no_image
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{directors.length > 1 ? 'S' : ''}</h3>
                            {directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    );
};

MovieInfo.prototype = {
    movie: PropTypes.object
};

export default MovieInfo;