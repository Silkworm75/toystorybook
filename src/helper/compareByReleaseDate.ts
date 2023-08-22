import { SearchResults } from "@/types/searchResults";

export default function compareByReleaseDate(a: SearchResults, b: SearchResults): number {
  const dateA = new Date(a.release_date);
  const dateB = new Date(b.release_date);
  return dateA.getTime() - dateB.getTime();
}
