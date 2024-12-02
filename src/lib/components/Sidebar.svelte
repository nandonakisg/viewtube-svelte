<script>
  import { Home, Search, Library } from 'lucide-svelte';
</script>

<aside class="w-[var(--sidebar-width)] bg-[#0f0f0f] flex flex-col p-3 pt-2">
  <div class="flex flex-col gap-2">
    <a href="/" class="flex items-center gap-6 px-3 py-3 hover:bg-white/10 rounded-lg">
      <Home size={24} />
      <span>Home</span>
    </a>
    <a href="/search" class="flex items-center gap-6 px-3 py-3 hover:bg-white/10 rounded-lg">
      <Search size={24} />
      <span>Search</span>
    </a>
    <a href="/playlists" class="flex items-center gap-6 px-3 py-3 hover:bg-white/10 rounded-lg">
      <Library size={24} />
      <span>Playlists</span>
    </a>
  </div>
</aside>