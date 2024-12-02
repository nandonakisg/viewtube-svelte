<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { videos } from '$lib/data/mockData.js';
  import { writable } from 'svelte/store';
  
  let view = 'grid';
  let sortBy = 'original';
  
  // Remove the ml-[var(--sidebar-width)] since it's handled by the layout
</script>

<svelte:head>
  <title>YouTube Clone</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Home</h1>

<VideoGrid {videos} bind:view bind:sortBy />