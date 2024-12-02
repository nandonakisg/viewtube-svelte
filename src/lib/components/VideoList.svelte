<script lang="ts">
  import { type Props } from 'svelte';
  import { Grid, List } from 'lucide-svelte';
  import VideoCard from './VideoCard.svelte';
  import SearchResultCard from './SearchResultCard.svelte';
  import LoadingSpinner from './LoadingSpinner.svelte';
  import type { Video } from '../types/video';
  import type { SearchResult } from '../types/search';

  interface VideoListProps {
    videos: Video[] | SearchResult[];
    loading?: boolean;
    error?: string | null;
    query?: string;
    onRetry?: () => void;
  }
  
  const props = $props<VideoListProps>();
  
  let viewMode = $state<'grid' | 'list'>('grid');
  const isSearchResults = $derived(props.videos.length > 0 && 'description' in props.videos[0]);
  
  function toggleViewMode() {
    viewMode = viewMode === 'grid' ? 'list' : 'grid';
  }
</script>

<div class="max-w-[1096px] mx-auto">
  {#if props.loading}
    <div class="flex flex-col items-center justify-center py-16 gap-4">
      <LoadingSpinner size={40} />
      <p class="text-gray-400">Loading videos...</p>
    </div>
  {:else if props.error}
    <div class="flex flex-col items-center justify-center py-16 gap-4 text-red-500">
      <p class="text-xl">{props.error}</p>
      <button 
        class="px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors"
        on:click={() => props.onRetry?.()}
      >
        Try Again
      </button>
    </div>
  {:else if props.videos.length === 0}
    <div class="flex flex-col items-center justify-center py-16 gap-4">
      <p class="text-gray-400">No videos found</p>
      {#if props.onRetry}
        <button 
        class="px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors"
        on:click={props.onRetry}
      >
        Refresh
      </button>
      {/if}
    </div>
  {:else}
    <div class="mb-4 flex justify-between items-center">
      {#if props.query !== undefined}
        <div class="flex-1">
          <h2 class="text-xl mb-1">Search Results for "{props.query}"</h2>
          <div class="text-sm text-gray-400">{props.videos.length} results</div>
        </div>
      {:else}
        <div class="flex-1" />
      {/if}
      <button
        class="p-2 hover:bg-[#272727] rounded-full transition-colors"
        on:click={toggleViewMode}
        title={viewMode === 'grid' ? 'Switch to list view' : 'Switch to grid view'}
      >
        <svelte:component this={viewMode === 'grid' ? List : Grid} size={24} />
      </button>
    </div>
    
    {#if viewMode === 'grid'}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {#each props.videos as video}
          <VideoCard video={video} />
        {/each}
      </div>
    {:else}
      <div class="space-y-6">
        {#each props.videos as video}
          <div class="flex gap-4">
            {#if 'description' in video}
              <SearchResultCard result={video} />
            {:else}
              <VideoCard video={video} />
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</div>