<script lang="ts">
  import { Home, Compass, Clock, ThumbsUp, PlaySquare, History, Search, ListVideo } from 'lucide-svelte';
  import { navigate } from '../utils/navigation';

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: Compass, label: 'Explore', href: '/explore' },
    { icon: History, label: 'History', href: '/history' },
    { icon: ListVideo, label: 'Playlists', href: '/playlists' },
    { icon: PlaySquare, label: 'Your Videos', href: '/your-videos' },
    { icon: Clock, label: 'Watch Later', href: '/playlist?list=WL' },
    { icon: ThumbsUp, label: 'Liked Videos', href: '/playlist?list=LL' },
  ];
  
  function handleClick(e: MouseEvent, href: string) {
    e.preventDefault();
    navigate(href);
  }
</script>

<aside class="fixed left-0 top-14 w-[var(--sidebar-width)] h-[calc(100vh-3.5rem)] bg-[#0f0f0f] overflow-y-auto">
  <div class="px-2 py-3">
    {#each menuItems as item}
      <a
        href={item.href}
        on:click={(e) => handleClick(e, item.href)}
        class="flex items-center gap-6 px-3 py-2 hover:bg-[#272727] rounded-lg text-sm"
      >
        <svelte:component this={item.icon} size={24} />
        <span>{item.label}</span>
      </a>
    {/each}
  </div>
</aside>