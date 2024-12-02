<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { sidebarVisible } from '$lib/stores/sidebar';
  import ViewTubeLogo from '$lib/components/ViewTubeLogo.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { Menu, Play } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme';
  
  onMount(() => {
    theme.initialize();
  });
  
  function toggleSidebar() {
    $sidebarVisible = !$sidebarVisible;
  }
</script>

<div class="h-screen flex flex-col overflow-hidden">
  <header class="bg-white dark:bg-yt-gray-dark flex items-center px-4 h-14 border-b border-yt-gray-light dark:border-yt-gray-dark">
    <div class="flex items-center gap-4">
      <button 
        class="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full"
        on:click={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <a href="/">
        <ViewTubeLogo />
      </a>
    </div>
    <div class="flex-1 flex items-center justify-between">
      <Topbar />
    </div>
  </header>
  <div class="flex flex-1 overflow-hidden">
    <div 
      class="bg-white dark:bg-yt-gray-dark transition-all duration-300 ease-in-out overflow-hidden"
      style="width: {$sidebarVisible ? 'var(--sidebar-width)' : '0px'}"
    >
      <Sidebar />
    </div> 
    <main class="flex-1 overflow-y-auto p-6">
      <slot />
    </main>
  </div>
</div>