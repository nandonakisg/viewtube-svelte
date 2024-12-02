<script>
  import { Bell, Camera, User } from 'lucide-svelte';
  import SearchBar from './SearchBar.svelte';
</script>

<div class="flex-1 flex justify-center">
  <SearchBar />
</div>

<div class="flex items-center gap-3 w-[240px] justify-end">
  <button class="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full">
    <Camera size={20} />
  </button>
  <button class="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full">
    <Bell size={20} />
  </button>
  <button class="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full">
    <User size={20} />
  </button>
</div>