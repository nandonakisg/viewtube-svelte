<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import ViewTubeLogo from '$lib/components/ViewTubeLogo.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { Menu, Play } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme';

  onMount(() => {
    theme.initialize();
  });
</script>

<div class="h-screen flex flex-col overflow-hidden">
  <header class="bg-yt-bg-light dark:bg-yt-bg-dark flex items-center px-4 h-14">
    <div class="flex items-center gap-4">
      <button class="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full">
        <Menu size={24} />
      </button>
      <a href="/">
        <ViewTubeLogo />
      </a>
    </div>
    <div class="flex-1 flex items-center justify-between">
      <Topbar />
      <div class="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  </header>
  <div class="flex flex-1 overflow-hidden">
    <Sidebar />
    <main class="flex-1 overflow-y-auto p-6">
      <slot />
    </main>
  </div>
</div>