import { NextRequest, NextResponse } from "next/server";
import { Movie } from "@/types/";
// export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie: Movie = await res.json();


  return NextResponse.json(
    {
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
    },
    {
      status: 200,
    }
  );
}
