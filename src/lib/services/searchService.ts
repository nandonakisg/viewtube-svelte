import type { SearchResults } from '../types/search';
import searchData from '../data/searchResults.json';

export async function getSearchResults(query: string): Promise<SearchResults> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return searchData;
}