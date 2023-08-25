import { GetStaticPaths, Metadata } from "next";
import { MOVIE_PATHS } from "@/helper/constants";
import { Movie } from "@/types/";
import shortenText from "@/helper/shortenText";
import MovieComponent from '@/components/MovieComponent/MovieComponent';

type Props = {
  params: { id: string };
};

// Dynamic SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie: Movie = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json());
  return {
    title: movie?.title ? `${movie.title} | ToyStoryBook` : "ToyStoryBook",
    description: shortenText(movie?.overview, 160),
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOVIE_PATHS,
    fallback: true,
  };
};

const MovieDetailPage = async ({ params }: Props) => {
  const res = await fetch(
    `${process.env.API_ROUTE}/getMovieById?id=${params.id}`
  );
  const movie: Movie = await res.json();

  if (movie?.id) {
    return <MovieComponent movie={movie} showRatings={false} />;
  } else {
    return <h1>Missing</h1>;
  }
};

export default MovieDetailPage;
