<script lang="ts">
  import VideoList from './VideoList.svelte';
  import { getSearchResults } from '../services/searchService';
  import type { SearchResult } from '../types/search';

  let results: SearchResult[] = $state([]);
  let query: string = $state('');
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function loadResults() {
    try {
      loading = true;
      error = null;
      const data = await getSearchResults(query);
      query = data.query;
      results = data.results;
    } catch (e) {
      error = 'Failed to load search results';
      console.error(e);
    } finally {
      loading = false;
    }
  }

  loadResults();
</script>

<VideoList videos={results} {loading} {error} {query} onRetry={loadResults} />