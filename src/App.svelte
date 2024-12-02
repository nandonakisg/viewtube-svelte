<script lang="ts">
  import Navbar from './lib/components/Navbar.svelte'
  import Sidebar from './lib/components/Sidebar.svelte'
  import VideoGrid from './lib/components/VideoGrid.svelte'
  import SearchResults from './lib/components/SearchResults.svelte'
  import Playlists from './lib/components/Playlists.svelte'
  import PlaylistDetail from './lib/components/PlaylistDetail.svelte'
  import { page } from './lib/stores/page'

  $: currentPage = $page;
</script>

<Navbar />
<Sidebar />
<main class="pt-14 pl-[var(--sidebar-width)]">
  <div class="p-4">
    {#if currentPage.name === 'search'}
      <SearchResults />
    {:else if currentPage.name === 'playlists'}
      <Playlists />
    {:else if currentPage.name === 'playlist' && currentPage.params?.id}
      <PlaylistDetail playlistId={currentPage.params.id} />
    {:else}
      <VideoGrid />
    {/if}
  </div>
</main>