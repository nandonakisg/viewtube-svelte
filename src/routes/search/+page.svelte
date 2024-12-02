<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { videos } from '$lib/data/mockData.js';
  import { videoSettings } from '$lib/stores/videoSettings';
  
  // Set initial view to list for search page
  videoSettings.setView('list');
</script>

<svelte:head>
  <title>Search Results - YouTube Clone</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Search Results</h1>

<VideoGrid {videos} showToggle={true} />