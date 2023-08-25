const createMoviePath = (id: string) => ({
  params: {
    id: `/movie/${id}`,
  },
});

// IDs grabbed from imdb
export const movieIds = [
  "tt0114709", // Toy Story 1
  "tt0120363", // Toy Story 2
  "tt0435761", // Toy Story 3
  "301528", // Toy Story 4
  "1084244", // Toy Story 5
];

export const MOVIE_PATHS = movieIds.map(createMoviePath);
export const SEARCH_QUERY = "Toy Story";
export const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
