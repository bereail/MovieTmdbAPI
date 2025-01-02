import React from 'react';
import HeroImage from './HeroImage'; // Default import
import { useHomeFetch } from '../hooks/useHomeFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE,  POSTER_SIZE } from '../config';
import  {Grid} from './Grid/Index';
import Thumb from './Thumb';
import NoImage from '../images/NoImage.svg';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';



const Home = () => {
  const { 
    state, 
    loading, 
    error, 
    searchTerm, 
    setSearchTerm, 
    fetchMovies,
     setIsLoadingMore
     } = useHomeFetch();

     console.log(state);

     if (error) return <div>Something went wrong ... </div>;


  const imageURL = state?.results?.[0]?.backdrop_path;

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
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
      <SearchBar setSearchTerm={setSearchTerm} /> {/* Asegúrate de pasar setSearchTerm */}
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {loading && <Spinner />}
        {state?.results ? (
          state.results.map((movie) => (
            <Thumb
              key={movie.id}
              clickeable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieId={movie.id}
            />
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </Grid>
      {state.page < state.total_pages && !loading && (
       <Button
       text="Load More"
       callback={() => setIsLoadingMore(true)}
     />
     
      )}
    </>
  );
};

export default Home;