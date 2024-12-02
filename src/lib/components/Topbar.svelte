<script>
  import { Search, Bell, Video, User } from 'lucide-svelte';
</script>

<div class="flex-1 flex items-center justify-between">
  <div class="w-[240px]"></div>
  <div class="flex-1 flex justify-center max-w-[640px]">
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
  </div>

  <div class="flex items-center gap-3 w-[240px] justify-end">
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