<script>
  import { Search } from 'lucide-svelte';
  
  let searchQuery = '';
  
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Implement search functionality
  }
</script>

<form
  on:submit={handleSubmit}
  class="flex items-center max-w-[640px] w-full"
>
  <div class="flex-1 relative group">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search"
      class="w-full bg-yt-gray-light dark:bg-yt-gray-dark text-yt-text-light dark:text-yt-text-dark placeholder:text-yt-secondary-light dark:placeholder:text-yt-secondary-dark px-4 py-2 rounded-l-full outline-none border border-yt-gray-light dark:border-[#303030] focus:border-blue-500 dark:focus:border-blue-400"
    />
  </div>
  <button
    type="submit"
    class="px-6 py-2 bg-yt-gray-light dark:bg-yt-gray-dark border border-l-0 border-yt-gray-light dark:border-[#303030] rounded-r-full hover:bg-black/5 dark:hover:bg-white/5 text-yt-text-light dark:text-yt-text-dark"
  >
    <Search size={20} />
  </button>
</form>