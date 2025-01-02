import { API_KEY, API_URL } from "./config";

const API = {
  fetchMovies: async (searchTerm = "", page = 1) => {
    const endpoint = searchTerm
      ? `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`
      : `${API_URL}movie/popular?api_key=${API_KEY}&page=${page}`;
    
    console.log("Fetching from endpoint:", endpoint);

    const response = await fetch(endpoint); // Fetch data from the API
    if (!response.ok) { // Check if the response is okay
      throw new Error(`API call failed: ${response.statusText}`);
    }
    return await response.json(); // Parse the JSON response
  },
};

export default API;
