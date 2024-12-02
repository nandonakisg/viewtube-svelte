<script lang="ts">
  import { Menu, Search, Video, Bell, User } from 'lucide-svelte';
</script>

<header class="fixed top-0 left-0 right-0 bg-[#0f0f0f] flex justify-between items-center px-4 h-14 z-50">
  <div class="flex items-center gap-4">
    <button class="p-2 hover:bg-[#272727] rounded-full">
      <Menu size={24} />
    </button>
    <a href="/" class="flex items-center">
      <span class="text-xl font-bold">YouTube Clone</span>
    </a>
  </div>

  <div class="flex-1 max-w-[600px] flex items-center gap-4 px-4">
    <form class="flex-1 flex">
      <input
        type="search"
        placeholder="Search"
        class="w-full px-4 py-2 bg-[#121212] border border-[#303030] rounded-l-full focus:border-blue-500 outline-none"
      />
      <button class="px-6 bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#272727]">
        <Search size={20} />
      </button>
    </form>
  </div>

  <div class="flex items-center gap-3">
    <button class="p-2 hover:bg-[#272727] rounded-full">
      <Video size={24} />
    </button>
    <button class="p-2 hover:bg-[#272727] rounded-full">
      <Bell size={24} />
    </button>
    <button class="p-2 hover:bg-[#272727] rounded-full">
      <User size={24} />
    </button>
  </div>
</header>