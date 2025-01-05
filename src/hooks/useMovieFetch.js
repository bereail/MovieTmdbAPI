import { useState, useEffect, useCallback } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovieData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      // Fetch movie details and credits
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);

      // Extract directors from crew
      const directors = credits.crew.filter((member) => member.job === "Director");

      setState({
        ...movie,
        actors: credits.cast,
        directors: directors,
      });
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return { state, loading, error };
};
