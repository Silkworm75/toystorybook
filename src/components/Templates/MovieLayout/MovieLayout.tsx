import { TMDB_IMAGE_PATH } from "@/helper/constants";
import Link from "next/link";
import React from "react";
import Rating from "@/components/Rating/Rating";
import { Movie } from "@/types/movie";
import Image from "next/image";
import Img from "@/components/Atoms/Img/Img";

type Props = {
  movie: Movie;
  showPoster: boolean;
  showTitle: boolean;
  showTagline: boolean;
  showRatings: boolean;
  showText: boolean;
  showRevenue: boolean;
  showLink: boolean;
};

function MovieLayout({
  movie,
  showPoster,
  showTitle,
  showTagline,
  showRatings,
  showText,
  showRevenue,
  showLink,
}: Props) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="relative lg:w-4/5 mx-auto flex flex-wrap">
          {showPoster && (
            <div className="relative w-96 aspect-[2/3]">
              <Img
                alt={`${movie.title}`}
                src={`${TMDB_IMAGE_PATH}${movie.poster_path}`}
              />
            </div>
          )}

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {showTitle && (
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {movie.title}
              </h1>
            )}

            {showTagline && (
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-4">
                {movie.tagline}
              </h2>
            )}

            {showRatings && (
              <div className="flex mb-4">
                <Rating starStyle="orange" />
              </div>
            )}

            {showText && (
              <p className="leading-relaxed mb-4">{movie.overview}</p>
            )}

            {showRevenue && (
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900 mb-8">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(movie.revenue)}
                </span>
              </div>
            )}

            {showLink && (
              <div className="">
                <Link
                  title={`${movie.title} on IMDB`}
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                >
                  <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    go to IMDB
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

MovieLayout.defaultProps = {
  showPoster: true,
  showTitle: true,
  showTagline: true,
  showRatings: true,
  showText: true,
  showRevenue: true,
  showLink: true,
};

export default MovieLayout;
