<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { mockVideos } from '$lib/data/mockVideos.js';
  import { writable } from 'svelte/store';
  
  // Create a grid of videos with unique IDs
  const videos = Array.from({ length: 12 }, (_, index) => ({
    ...mockVideos[index % mockVideos.length],
    id: index + 1
  }));
  
  let view = 'grid';
  
  // Remove the ml-[var(--sidebar-width)] since it's handled by the layout
</script>

<svelte:head>
  <title>YouTube Clone</title>
</svelte:head>

<div class="p-6">
  <VideoGrid {videos} bind:view />
</div>