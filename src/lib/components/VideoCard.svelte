<script>
  export let title = '';
  export let channelName = '';
  export let views = '';
  export let timestamp = '';
  export let thumbnail = '';
  export let channelAvatar = '';
  export let duration = '0:00';
  export let description = '';
</script>

<div class="group flex flex-col gap-2 w-[335px]">
  <div class="relative w-[335px] h-[185px] rounded-xl overflow-hidden bg-yt-gray-light dark:bg-yt-gray-dark">
    <img src={thumbnail} alt={title} class="w-full h-full object-cover" />
    <div class="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md">
      {duration}
    </div>
  </div>
  
  <div class="flex gap-2 w-full">
    <div class="w-9 h-9 rounded-full overflow-hidden bg-yt-gray-light dark:bg-yt-gray-dark flex-shrink-0">
      <img src={channelAvatar} alt={channelName} class="w-full h-full object-cover" />
    </div>

    <div class="flex flex-col flex-1 max-w-[260px]">
      <h3 class="font-medium line-clamp-2">{title}</h3>
      <p class="text-sm text-yt-secondary-light dark:text-yt-secondary-dark hover:text-yt-text-light dark:hover:text-yt-text-dark">{channelName}</p>
      
      <div class="flex items-center gap-1 text-sm text-yt-secondary-light dark:text-yt-secondary-dark mt-1">
        <span>{views} views</span>
        <span>•</span>
        <span>{timestamp}</span>
      </div>
      {#if description}
        <p class="text-sm text-yt-secondary-light dark:text-yt-secondary-dark line-clamp-2 mt-1">{description}</p>
      {/if}
    </div>
  </div>
</div>