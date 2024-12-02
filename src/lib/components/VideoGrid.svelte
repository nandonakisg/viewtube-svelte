<script>
  import { LayoutGrid, List } from 'lucide-svelte';
  import VideoCard from './VideoCard.svelte';
  
  export let videos = [];
  export let view = 'grid';
  export let showToggle = true;
  
  function toggleView() {
    view = view === 'grid' ? 'list' : 'grid';
  }
</script>

<div class="space-y-4">
  {#if showToggle}
    <div class="flex justify-end">
      <button
        on:click={toggleView}
        class="p-2 hover:bg-white/10 rounded-lg flex items-center gap-2 text-sm"
      >
        {#if view === 'grid'}
          <List size={20} />
          <span>Show list view</span>
        {:else}
          <LayoutGrid size={20} />
          <span>Show grid view</span>
        {/if}
      </button>
    </div>
  {/if}

  {#if view === 'grid'}
    <div class="grid grid-cols-[repeat(auto-fill,minmax(335px,1fr))] gap-x-[7px] gap-y-6">
      {#each videos as video (video.id)}
        <VideoCard {...video} {view} />
      {/each}
    </div>
  {:else}
    <div class="flex flex-col items-start gap-6">
      {#each videos as video (video.id)}
        <VideoCard {...video} {view} />
      {/each}
    </div>
  {/if}
</div>