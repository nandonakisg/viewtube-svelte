<script>
  import { LayoutGrid, List, Table2, Hash, Clock, TrendingUp, Timer, Users } from 'lucide-svelte';
  import VideoCard from './VideoCard.svelte';
  import VideoTable from './VideoTable.svelte';
  
  export let videos = [];
  export let view = 'grid';
  export let showToggle = true;
  export let sortBy = 'original';
  export let groupByChannel = false;
  
  $: sortedVideos = [...videos].sort((a, b) => {
    switch (sortBy) {
      case 'age':
        return a.daysAgo - b.daysAgo;
      case 'views':
        return b.rawViews - a.rawViews;
      case 'duration-asc':
        return a.durationInSeconds - b.durationInSeconds;
      case 'duration-desc':
        return b.durationInSeconds - a.durationInSeconds;
      default:
        return 0; // original order
    }
  });
  
  $: groupedVideos = groupByChannel
    ? sortedVideos.reduce((acc, video) => {
        const channel = acc.find(g => g.channelName === video.channelName);
        if (channel) {
          channel.videos.push(video);
        } else {
          acc.push({
            channelName: video.channelName,
            channelAvatar: video.channelAvatar,
            videos: [{ ...video }]
          });
        }
        return acc;
      }, []).sort((a, b) => b.videos.length - a.videos.length)
    : null;
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center gap-4 flex-wrap">
    <div class="inline-flex bg-yt-gray-light dark:bg-yt-gray-dark rounded-lg p-1">
      <button
        class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {groupByChannel ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
        on:click={() => groupByChannel = !groupByChannel}
      >
        <Users size={18} />
        <span>Group by Channel</span>
      </button>
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
      <button
        class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {sortBy === 'duration-asc' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
        on:click={() => sortBy = 'duration-asc'}
      >
        <Timer size={18} />
        <span>Duration ↑</span>
      </button>
      <button
        class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {sortBy === 'duration-desc' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
        on:click={() => sortBy = 'duration-desc'}
      >
        <Timer size={18} />
        <span>Duration ↓</span>
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
        <button
          class="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors {view === 'table' ? 'bg-black/10 dark:bg-white/10' : 'text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark'}"
          on:click={() => view = 'table'}
        >
          <Table2 size={18} />
          <span>Table</span>
        </button>
      </div>
    {/if}
  </div>

  {#if view === 'grid'}
    {#if groupByChannel && groupedVideos}
      <div class="space-y-8">
        {#each groupedVideos as group}
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img src={group.channelAvatar} alt={group.channelName} class="w-12 h-12 rounded-full" />
              <h2 class="text-xl font-semibold">{group.channelName}</h2>
            </div>
            <div class="grid grid-cols-[repeat(auto-fill,minmax(335px,1fr))] gap-x-[7px] gap-y-6">
              {#each group.videos as video (video.id)}
                <VideoCard {...video} />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="grid grid-cols-[repeat(auto-fill,minmax(335px,1fr))] gap-x-[7px] gap-y-6">
        {#each sortedVideos as video (video.id)}
          <VideoCard {...video} />
        {/each}
      </div>
    {/if}
  {:else if view === 'table'}
    <VideoTable videos={sortedVideos} {groupByChannel} />
  {:else}
    {#if groupByChannel && groupedVideos}
      <div class="space-y-8">
        {#each groupedVideos as group}
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img src={group.channelAvatar} alt={group.channelName} class="w-12 h-12 rounded-full" />
              <h2 class="text-xl font-semibold">{group.channelName}</h2>
            </div>
            <div class="flex flex-col items-start gap-6">
              {#each group.videos as video (video.id)}
                <VideoCard {...video} />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="flex flex-col items-start gap-6">
        {#each sortedVideos as video (video.id)}
          <VideoCard {...video} />
        {/each}
      </div>
    {/if}
  {/if}
</div>