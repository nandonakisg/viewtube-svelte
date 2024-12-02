<script>
  import VideoCard from '$lib/components/VideoCard.svelte';
  import { mockVideos } from '$lib/data/mockVideos.js';
  
  // Create a grid of videos with unique IDs
  const videos = Array.from({ length: 12 }, (_, index) => ({
    ...mockVideos[index % mockVideos.length],
    id: index + 1
  }));
</script>

<svelte:head>
  <title>YouTube Clone</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-4 ml-[var(--sidebar-width)]">
  {#each videos as video (video.id)}
    <VideoCard {...video} />
  {/each}
</div>