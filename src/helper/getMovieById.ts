import { Movie } from "@/types/movie";

export default async function getMovieById(movieid: string, options: {}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.TMDB_API_KEY}`,
    options
  );
  const movie: Movie = await res.json();
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    imdb_id: movie.imdb_id,
    tagline: movie.tagline,
    budget: movie.budget,
    runtime: movie.runtime,
    release_date: movie.release_date,
    revenue: movie.revenue,
  };
}
