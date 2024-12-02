<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { videos } from '$lib/data/mockData.js';
  import { Home } from 'lucide-svelte';
  import { setContext } from 'svelte';
  
  setContext('pageId', 'home');
  
  // Remove the ml-[var(--sidebar-width)] since it's handled by the layout
</script>

<svelte:head>
  <title>YouTube Clone</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6 flex items-center gap-2">
  <Home size={28} class="text-yt-red" />
  <span>Home</span>
</h1>

<VideoGrid {videos} showToggle={true} />