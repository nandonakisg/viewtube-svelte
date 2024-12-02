<script>
  import PlaylistCard from '$lib/components/PlaylistCard.svelte';
  import { mockPlaylists } from '$lib/data/mockPlaylists.js';
  import { Library } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Playlists - YouTube Clone</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6 flex items-center gap-2">
  <Library size={28} class="text-yt-red" />
  <span>Your Playlists</span>
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {#each mockPlaylists as playlist (playlist.id)}
    <PlaylistCard {...playlist} />
  {/each}
</div>