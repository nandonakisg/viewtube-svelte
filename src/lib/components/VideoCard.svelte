<script>
  import { formatTimeAgo } from '$lib/utils/format.js';

  export let title = '';
  export let channelName = '';
  export let views = '';
  export let timestamp = '';
  export let thumbnail = '';
  export let channelAvatar = '';
  export let duration = '0:00';
  
  $: formattedTimestamp = formatTimeAgo(timestamp);
</script>

<div class="flex flex-col gap-2 group">
  <div class="relative aspect-video rounded-xl overflow-hidden bg-yt-gray">
    {#if thumbnail}
      <img src={thumbnail} alt={title} class="w-full h-full object-cover" />
    {/if}
    <div class="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded-md">
      {duration}
    </div>
  </div>
  
  <div class="flex gap-2">
    <div class="w-9 h-9 rounded-full overflow-hidden bg-yt-gray flex-shrink-0">
      {#if channelAvatar}
        <img src={channelAvatar} alt={channelName} class="w-full h-full object-cover" />
      {/if}
    </div>
    <div class="flex flex-col flex-1">
      <h3 class="font-medium line-clamp-2 group-hover:text-yt-white">{title}</h3>
      <p class="text-sm text-gray-400 hover:text-yt-white">{channelName}</p>
      <div class="flex items-center gap-1 text-sm text-gray-400 mt-1">
        <span>{views} views</span>
        <span>•</span>
        <span>{formattedTimestamp}</span>
      </div>
    </div>
  </div>
</div>