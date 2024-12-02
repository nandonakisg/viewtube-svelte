<script>
  import SearchResultCard from '$lib/components/SearchResultCard.svelte';
  import { mockSearchResults } from '$lib/data/mockSearchResults.js';
</script>

<svelte:head>
  <title>Search Results - YouTube Clone</title>
</svelte:head>

<div class="ml-[var(--sidebar-width)] p-6">
  <div class="max-w-[1096px] mx-auto">
    <div class="flex flex-col gap-6">
      {#each mockSearchResults as result (result.id)}
        <SearchResultCard {...result} />
      {/each}
    </div>
  </div>
</div>