<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { mockSearchResults } from '$lib/data/mockSearchResults.js';
  
  let view = 'list';
  let sortBy = 'original';
</script>

<svelte:head>
  <title>Search Results - YouTube Clone</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Search Results</h1>

<VideoGrid videos={mockSearchResults} bind:view bind:sortBy />