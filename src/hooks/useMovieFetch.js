import { useState, useEffect, useCallback } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const movie = await API.fetchMovies(movieId);
      const credits = await API.fetchCredits(movieId);

      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...movie,
        actors: credits.cast,
        directors: directors,
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovies(); // calling the memoized function
  }, [movieId, fetchMovies]);

  return { state, loading, error };
};
