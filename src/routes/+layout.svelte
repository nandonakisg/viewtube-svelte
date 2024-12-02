<script>
  import '../app.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
</script>

<div class="flex h-screen">
  <Sidebar />
  <div class="flex-1 flex flex-col">
    <Topbar />
    <main class="flex-1 overflow-y-auto px-8 py-4">
      <slot />
    </main>
  </div>
</div>