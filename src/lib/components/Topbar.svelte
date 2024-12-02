<script>
  import { Bell, User } from 'lucide-svelte';
  import SearchBar from './SearchBar.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="flex-1 flex justify-center">
  <SearchBar />
</div>

<div class="flex items-center gap-2 w-[240px] justify-end">
  <ThemeToggle />
  <button 
    class="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full"
    title="Notifications"
  >
    <Bell size={20} />
  </button>
  <button 
    class="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full"
    title="Account"
  >
    <User size={20} />
  </button>
</div>