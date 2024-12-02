import type { Video } from './video';

export interface SearchResult extends Video {
  description: string;
}

export interface SearchResults {
  query: string;
  results: SearchResult[];
}