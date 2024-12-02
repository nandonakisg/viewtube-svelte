<script lang="ts">
  import { getPlaylists } from '../services/playlistService';
  import type { Playlist } from '../types/playlist';
  import PlaylistCard from './PlaylistCard.svelte';
  import LoadingSpinner from './LoadingSpinner.svelte';
  import PlaylistDetail from './PlaylistDetail.svelte';

  let playlists = $state<Playlist[]>([]);
  let loading = $state<boolean>(true);
  let error = $state<string | null>(null);
  let selectedPlaylistId = $state<string | null>(null);

  async function loadPlaylists() {
    try {
      loading = true;
      error = null;
      playlists = await getPlaylists();
    } catch (e) {
      error = 'Failed to load playlists';
      console.error(e);
    } finally {
      loading = false;
    }
  }

  loadPlaylists();

  function handlePlaylistSelect(id: string) {
    console.log('Selected playlist:', id);
    selectedPlaylistId = id;
  }
</script>

<div class="max-w-[1096px] mx-auto">
  <div class="mb-12">
    <h1 class="text-2xl font-bold mb-6">Your Playlists</h1>
  
    {#if loading}
      <div class="flex flex-col items-center justify-center py-16 gap-4">
        <LoadingSpinner size={40} />
        <p class="text-gray-400">Loading playlists...</p>
      </div>
    {:else if error}
      <div class="flex flex-col items-center justify-center py-16 gap-4 text-red-500">
        <p class="text-xl">{error}</p>
        <button 
          class="px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors"
          on:click={loadPlaylists}
        >
          Try Again
        </button>
      </div>
    {:else}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {#each playlists as playlist}
          <PlaylistCard
            {playlist}
            on:select={({ detail }) => handlePlaylistSelect(detail.id)}
          />
        {/each}
      </div>
    {/if}
  </div>
  
  {#if selectedPlaylistId !== null}
    <div class="mt-8 pt-8 border-t border-[#272727]">
      <PlaylistDetail playlistId={selectedPlaylistId} />
    </div>
  {/if}
</div>