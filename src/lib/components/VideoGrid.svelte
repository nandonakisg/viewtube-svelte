<script>
  import { LayoutGrid, List, Hash, Clock, TrendingUp } from 'lucide-svelte';
  import VideoCard from './VideoCard.svelte';
  
  export let videos = [];
  export let view = 'grid';
  export let showToggle = true;
  export let sortBy = 'original';
  
  function toggleView() {
    view = view === 'grid' ? 'list' : 'grid';
  }

  $: sortedVideos = [...videos].sort((a, b) => {
    switch (sortBy) {
      case 'age':
        return a.daysAgo - b.daysAgo; // Changed to ascending
      case 'views':
        return b.rawViews - a.rawViews;
      default:
        return 0; // original order
    }
  });
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center">
    <div class="inline-flex bg-yt-gray-light dark:bg-yt-gray-dark rounded-lg p-1">
      <button
        class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {sortBy === 'original' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
        on:click={() => sortBy = 'original'}
      >
        <Hash size={18} />
        <span>Original</span>
      </button>
      <button
        class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {sortBy === 'age' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
        on:click={() => sortBy = 'age'}
      >
        <Clock size={18} />
        <span>Age</span>
      </button>
      <button
        class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {sortBy === 'views' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
        on:click={() => sortBy = 'views'}
      >
        <TrendingUp size={18} />
        <span>Views</span>
      </button>
    </div>
    {#if showToggle}
      <div class="inline-flex bg-yt-gray-light dark:bg-yt-gray-dark rounded-lg p-1">
        <button
          class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {view === 'grid' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
          on:click={() => view = 'grid'}
        >
          <LayoutGrid size={18} />
          <span>Grid</span>
        </button>
        <button
          class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {view === 'list' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
          on:click={() => view = 'list'}
        >
          <List size={18} />
          <span>List</span>
        </button>
      </div>
    {/if}
  </div>

  {#if view === 'grid'}
    <div class="grid grid-cols-[repeat(auto-fill,minmax(335px,1fr))] gap-x-[7px] gap-y-6">
      {#each sortedVideos as video (video.id)}
        <VideoCard {...video} />
      {/each}
    </div>
  {:else}
    <div class="flex flex-col items-start gap-6">
      {#each sortedVideos as video (video.id)}
        <VideoCard {...video} />
      {/each}
    </div>
  {/if}
</div>