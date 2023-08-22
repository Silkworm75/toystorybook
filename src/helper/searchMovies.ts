import { Search } from "@/types/search";
import { SEARCH_QUERY } from './constants';

export default async function searchMovies(): Promise<Search> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${SEARCH_QUERY}&api_key=${process.env.TMDB_API_KEY}`
  );
  const searchedMovies = await res.json();
  return searchedMovies;
}
