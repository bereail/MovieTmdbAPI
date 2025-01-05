import React from "react";
import HeroImage from "./HeroImage"; // Default import
import { useHomeFetch } from "../hooks/useHomeFetch";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
import Grid from "./Grid";
import Thumb from "./Thumb";
import no_image from "../images/no_image.jpg";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  console.log(state);

  if (error) return <div>Something went wrong...</div>;

  const imageURL = state?.results?.[0]?.backdrop_path;

  return (
    <>
      {/* HeroImage */}
      {!searchTerm && state?.results?.[0] && (
        <HeroImage
          image={
            imageURL
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${imageURL}`
              : "path/to/default/image.jpg"
          }
          title={state.results[0]?.original_title || "Default Title"}
          text={state.results[0]?.overview || "No overview available."}
        />
      )}

      {/* SearchBar */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Grid */}
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state?.results && state.results.length > 0 ? (
          state.results.map((movie) => (
            <Thumb
              key={movie.id}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : no_image
              }
              movieId={movie.id}
              clickable
            />
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </Grid>

      {/* Spinner */}
      {loading && <Spinner />}

      {/* Load More Button */}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
