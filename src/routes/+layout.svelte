<script>
  import '../app.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
</script>

<div class="flex h-screen">
  <Sidebar />
  <div class="flex-1 flex flex-col ml-[var(--sidebar-width)]">
    <Topbar />
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</div>