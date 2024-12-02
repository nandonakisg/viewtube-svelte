<script>
  import '../app.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
  import { Menu } from 'lucide-svelte';
</script>

<div class="h-screen flex flex-col overflow-hidden">
  <header class="bg-[#0f0f0f] flex items-center px-4 h-14">
    <div class="flex items-center gap-4">
      <button class="p-2 hover:bg-white/10 rounded-full">
        <Menu size={24} />
      </button>
      <a href="/" class="flex items-center gap-1">
        <span class="text-xl font-bold">YouTube</span>
      </a>
    </div>
    <Topbar />
  </header>
  <div class="flex flex-1 overflow-hidden">
    <Sidebar />
    <main class="flex-1 overflow-y-auto p-6">
      <slot />
    </main>
  </div>
</div>