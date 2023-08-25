import { MovieTeaser } from ".";

export interface Movie extends MovieTeaser {
  imdb_id: string;
  tagline: string;
  budget: number;
  runtime: string;
  release_date: string;
  revenue: number;
}
