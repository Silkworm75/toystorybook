import { SearchResults } from "@/types/";

export default function compareByReleaseDate(
  a: SearchResults,
  b: SearchResults
): number {
  return (
    new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
  );
}
