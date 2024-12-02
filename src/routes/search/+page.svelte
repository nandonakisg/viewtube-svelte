<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { mockSearchResults } from '$lib/data/mockSearchResults.js';
  
  let view = 'list';
</script>

<svelte:head>
  <title>Search Results - YouTube Clone</title>
</svelte:head>

<div class="ml-[var(--sidebar-width)] p-6">
  <VideoGrid videos={mockSearchResults} bind:view columns={1} />
</div>