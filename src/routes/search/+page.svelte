<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { videos } from '$lib/data/mockData.js';
  import { Search } from 'lucide-svelte';
  import { setContext } from 'svelte';
  
  setContext('pageId', 'search');
</script>

<svelte:head>
  <title>Search Results - YouTube Clone</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6 flex items-center gap-2">
  <Search size={28} class="text-yt-red" />
  <span>Search Results</span>
</h1>

<VideoGrid {videos} showToggle={true} />