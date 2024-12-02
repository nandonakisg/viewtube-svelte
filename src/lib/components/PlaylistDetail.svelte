<script lang="ts">
  import { getPlaylistVideos } from '../services/playlistService';
  import type { Video } from '../types/video';
  import VideoList from './VideoList.svelte';
  import LoadingSpinner from './LoadingSpinner.svelte';

  interface PlaylistData {
    title: string;
    description: string;
    videos: Video[];
  }

  const props = $props<{
    playlistId: string;
  }>();

  let playlistData = $state<PlaylistData | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function loadPlaylistVideos() {
    try {
      loading = true;
      error = null;
      const data = await getPlaylistVideos(props.playlistId);
      if (data) {
        playlistData = data;
      } else {
        error = 'Playlist not found';
      }
    } catch (e) {
      error = 'Failed to load playlist videos';
      console.error(e);
    } finally {
      loading = false;
    }
  }

  loadPlaylistVideos();
</script>

<div class="max-w-[1096px] mx-auto">
  {#if loading}
    <div class="flex flex-col items-center justify-center py-16 gap-4">
      <LoadingSpinner size={40} />
      <p class="text-gray-400">Loading playlist...</p>
    </div>
  {:else if error}
    <div class="flex flex-col items-center justify-center py-16 gap-4 text-red-500">
      <p class="text-xl">{error}</p>
      <button 
        class="px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors"
        on:click={loadPlaylistVideos}
      >
        Try Again
      </button>
    </div>
  {:else}
    {#if playlistData}
      <div class="mb-8">
        <h1 class="text-2xl font-bold mb-2">{playlistData.title}</h1>
        <p class="text-gray-400">{playlistData.description}</p>
      </div>
      <VideoList 
        videos={playlistData.videos}
        loading={loading}
        error={error}
        onRetry={loadPlaylistVideos}
      />
    {/if}
  {/if}
</div>