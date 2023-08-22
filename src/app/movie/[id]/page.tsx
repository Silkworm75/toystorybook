import { GetStaticPaths, Metadata } from "next";
import getMovieById from "@/helper/getMovieById";
import { MOVIE_PATHS } from "@/helper/constants";
import { Movie } from "@/types/movie";
import shortenText from "@/helper/shortenText";
import MovieLayout from "@/components/Templates/MovieLayout/MovieLayout";
import { GET_OPTIONS } from "@/helper/constants";

type Props = {
  params: { id: string };
};

// Dynamic SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie: Movie = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json());
  return {
    title: movie && movie?.title ? movie.title : "No title",
    description: shortenText(movie.overview, 160),
  };
}

// Pre-render paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOVIE_PATHS,
    fallback: true,
  };
};

export default async function Page({ params }: Props) {
  const movie: Movie = await getMovieById(params.id, GET_OPTIONS);
  
  if (movie && movie?.id) {
    return <MovieLayout movie={movie} showRatings={false} />;
  } else {
    return <h1>Missing</h1>
  }
  
}
