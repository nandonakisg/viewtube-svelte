<script>
  import { formatTimeAgo } from '$lib/utils/format.js';
  
  export let title = '';
  export let channelName = '';
  export let views = '';
  export let timestamp = '';
  export let thumbnail = '';
  export let channelAvatar = '';
  export let duration = '0:00';
  export let description = '';
  
  $: formattedTimestamp = formatTimeAgo(timestamp);
</script>

<div class="flex gap-4 group">
  <div class="relative w-[360px] flex-shrink-0">
    <div class="relative aspect-video rounded-xl overflow-hidden bg-yt-gray">
      {#if thumbnail}
        <img src={thumbnail} alt={title} class="w-full h-full object-cover" />
      {/if}
      <div class="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded-md">
        {duration}
      </div>
    </div>
  </div>
  
  <div class="flex flex-col flex-1 gap-2">
    <h3 class="text-xl font-medium line-clamp-2 group-hover:text-yt-white">{title}</h3>
    <div class="flex items-center gap-1 text-sm text-gray-400">
      <span>{views} views</span>
      <span>•</span>
      <span>{formattedTimestamp}</span>
    </div>
    
    <div class="flex items-center gap-2 mt-2">
      <div class="w-6 h-6 rounded-full overflow-hidden bg-yt-gray flex-shrink-0">
        {#if channelAvatar}
          <img src={channelAvatar} alt={channelName} class="w-full h-full object-cover" />
        {/if}
      </div>
      <span class="text-sm text-gray-400 hover:text-yt-white">{channelName}</span>
    </div>
    
    <p class="text-sm text-gray-400 line-clamp-2 mt-2">{description}</p>
  </div>
</div>