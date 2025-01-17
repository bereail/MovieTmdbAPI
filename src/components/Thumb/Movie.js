import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//components
import Spinner from "../Spinner";
import BreadCrumb from "../BreadCrumb";
import MovieInfo from "../MovieInfo";
import MovieInfoBar from "../MovieInfoBar";
//hook
import { useMovieFetch } from "../../hooks/useMovieFetch";
//image
import no_image from '../../images/no_image.jpg';
import Actor from "../Actor";
import Grid from "../Grid";

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log("Movie ID from params:", movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    return (
        <>        
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />       

            {/* Rendering actors */}
            <Grid header="Actors">
                {movie.actors.map((actor) => (
                    <Actor
                        key={actor.credit_id}  // Ensure a unique key is passed
                        name={10}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : no_image
                        }
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;


/*          <MovieInfoBar 
            time={movie.runtime} 
            budget={movie.budget}
            revenue={movie.revenue}/>      */