import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero";
import { TMDB_IMAGE_PATH } from "@/helper/constants";
import compareByReleaseDate from "@/helper/compareByReleaseDate";
import shortenText from "@/helper/shortenText";
import { MovieTeaser } from "@/types";

export const Home = async () => {
  const results = await fetch(`${process.env.API_ROUTE}/searchMovies`);
  const movies = await results.json();

  // Filter Search Results and sprty by Release Date
  const animatedMovies = movies.results
    .filter(
      (movie: { genre_ids: number[]; id: number }) =>
        movie.genre_ids.includes(16) && movie.id !== 1032263
    )
    .sort(compareByReleaseDate);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero bgImage={true} />
      {animatedMovies.length > 0 && (
        <p className="text-2xl mt-16">
          {animatedMovies.length}{" "}
          <span className="italic font-semibold">Toy Story</span> related movies
          found...
        </p>
      )}
      <div className="grid grid-cols-3 gap-4 my-16">
        {movies &&
          animatedMovies.length > 0 &&
          animatedMovies.map((movie: MovieTeaser) => (
            <Card
              key={movie.id}
              title={movie.title}
              buttonLabel="Info"
              buttonLink={`movie/${movie.id}`}
              text={shortenText(movie.overview, 100)}
              imgSrc={`${TMDB_IMAGE_PATH}${movie.poster_path}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
