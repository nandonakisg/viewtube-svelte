<script>
  import { sidebarVisible } from '$lib/stores/sidebar';
  import { Home, Search, Library } from 'lucide-svelte';
  
  let currentPath = '';
  $: if (typeof window !== 'undefined') {
    currentPath = window.location.pathname;
  }
</script>

<aside class="flex flex-col p-3 pt-2 bg-white dark:bg-yt-gray-dark overflow-hidden whitespace-nowrap">
  <div class="flex flex-col gap-2">
    <a
      href="/"
      class="flex items-center gap-6 px-3 py-3 rounded-lg transition-colors {currentPath === '/' ? 'bg-yt-gray-light dark:bg-white/10' : 'hover:bg-yt-gray-light dark:hover:bg-white/10'}"
    >
      <Home size={24} />
      <span>Home</span>
    </a>
    <a
      href="/search"
      class="flex items-center gap-6 px-3 py-3 rounded-lg transition-colors {currentPath === '/search' ? 'bg-yt-gray-light dark:bg-white/10' : 'hover:bg-yt-gray-light dark:hover:bg-white/10'}"
    >
      <Search size={24} />
      <span>Search</span>
    </a>
    <a
      href="/playlists"
      class="flex items-center gap-6 px-3 py-3 rounded-lg transition-colors {currentPath === '/playlists' ? 'bg-yt-gray-light dark:bg-white/10' : 'hover:bg-yt-gray-light dark:hover:bg-white/10'}"
    >
      <Library size={24} />
      <span>Playlists</span>
    </a>
  </div>
</aside>