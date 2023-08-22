export const PAGE = {
  title: "ToyStoryBook"
};

export const GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export const MOVIE_PATHS = [
  {
    // Toy Story 1
    params: {
      id: "/movie/tt0114709",
    },
  },
  {
    // Toy Story 2
    params: {
      id: "/movie/tt0120363",
    },
  },
  {
    // Toy Story 3
    params: {
      id: "/movie/tt0435761",
    },
  },
  {
    // Toy Story 4
    params: {
      id: "/movie/301528",
    },
  },
  {
    // Toy Story 5
    params: {
      id: "/movie/1084244",
    },
  },
];

export const SEARCH_QUERY = "Toy Story";
export const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
