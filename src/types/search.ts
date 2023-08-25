import { SearchResults } from './SearchResults';

export interface Search {
  page: number;
  results: SearchResults[];
  total_pages: number;
  total_results: number;
}
