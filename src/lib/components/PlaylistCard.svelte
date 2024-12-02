<script lang="ts">
  import type { Playlist } from '../types/playlist';
  import { formatTimestamp } from '../utils/format';
  import { Lock, Globe } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';
  
  interface PlaylistCardProps {
    playlist: Playlist;
  }
  
  const props = $props<PlaylistCardProps>();
  
  const dispatch = createEventDispatcher<{
    select: { id: string };
  }>();
  
  function handleClick(e: MouseEvent) {
    console.log('Clicked playlist:', props.playlist.id);
    e.preventDefault();
    dispatch('select', { id: props.playlist.id });
  }
</script>

<div class="flex flex-col gap-2">
  <a
    href="/playlists?id={props.playlist.id}"
    on:click={handleClick}
    class="relative aspect-video rounded-xl overflow-hidden group"
  >
    <img
      src={props.playlist.thumbnail}
      alt={props.playlist.title}
      class="object-cover w-full h-full"
    />
    <div class="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm">
      {props.playlist.videoCount} videos
    </div>
  </a>
  <div class="flex flex-col">
    <div class="flex items-center gap-2">
      <a
        href="/playlists?id={props.playlist.id}"
        on:click={handleClick}
        class="font-medium line-clamp-2 flex-1"
      >
        {props.playlist.title}
      </a>
      {#if props.playlist.visibility === 'private'}
        <Lock size={16} class="text-gray-400" />
      {:else if props.playlist.visibility === 'public'}
        <Globe size={16} class="text-gray-400" />
      {/if}
    </div>
    <div class="text-sm text-gray-400">
      Last updated {formatTimestamp(props.playlist.lastUpdated)}
    </div>
  </div>
</div>