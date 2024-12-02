<script>
  import { Sun, Moon } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme';
</script>

<button
  class="p-2 hover:bg-white/10 dark:hover:bg-black/10 rounded-full transition-colors"
  on:click={() => theme.toggle()}
>
  {#if $theme === 'dark'}
    <Sun size={20} />
  {:else}
    <Moon size={20} />
  {/if}
</button>