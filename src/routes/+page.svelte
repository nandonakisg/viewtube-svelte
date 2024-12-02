<script>
  import VideoGrid from '$lib/components/VideoGrid.svelte';
  import { videos } from '$lib/data/mockData.js';
  import { videoSettings } from '$lib/stores/videoSettings';
  
  // Remove the ml-[var(--sidebar-width)] since it's handled by the layout
</script>

<svelte:head>
  <title>YouTube Clone</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Home</h1>

<VideoGrid {videos} showToggle={true} />