import { NextResponse } from "next/server";
import { SEARCH_QUERY } from "@/helper/constants";
// export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${SEARCH_QUERY}&api_key=${process.env.TMDB_API_KEY}`
  );
  const searchedMovies = await res.json();

  return NextResponse.json(
    { ...searchedMovies },
    {
      status: 200,
    }
  );
}
