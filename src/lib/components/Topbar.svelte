<script>
  import { Search, Bell, Video, Mic, User } from 'lucide-svelte';
</script>

<div class="flex-1 flex items-center justify-between px-4">
  <div class="flex items-center gap-2 flex-1 justify-center max-w-2xl">
    <div class="flex items-center flex-1">
      <div class="flex items-center flex-1 bg-[#121212] border border-[#303030] rounded-l-full px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          class="w-full bg-transparent outline-none"
        />
      </div>
      <button class="px-6 py-2 bg-[#222222] border-y border-r border-[#303030] rounded-r-full hover:bg-[#303030]">
        <Search size={20} />
      </button>
    </div>
    <button class="p-2 hover:bg-white/10 rounded-full">
      <Mic size={20} />
    </button>
  </div>

  <div class="flex items-center gap-3">
    <button class="p-2 hover:bg-white/10 rounded-full">
      <Video size={20} />
    </button>
    <button class="p-2 hover:bg-white/10 rounded-full">
      <Bell size={20} />
    </button>
    <button class="p-2 hover:bg-white/10 rounded-full">
      <User size={20} />
    </button>
  </div>
</div>