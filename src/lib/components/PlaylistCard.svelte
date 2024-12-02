<script>
  export let title = '';
  export let thumbnails = [];
  export let videoCount = 0;
  export let visibility = 'Public';
  export let updatedAt = '';
</script>

<div class="flex flex-col gap-2 group">
  <div class="relative aspect-video rounded-xl overflow-hidden bg-yt-gray">
    <div class="grid grid-cols-2 h-full">
      {#if thumbnails[0]}
        <img src={thumbnails[0]} alt="" class="w-full h-full object-cover row-span-2" />
      {/if}
      <div class="grid grid-rows-2 h-full">
        {#each thumbnails.slice(1, 3) as thumbnail}
          <div class="bg-yt-gray overflow-hidden">
            <img src={thumbnail} alt="" class="w-full h-full object-cover opacity-70" />
          </div>
        {/each}
      </div>
    </div>
    <div class="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded-md">
      {videoCount} videos
    </div>
  </div>
  
  <div class="flex flex-col">
    <h3 class="font-medium line-clamp-2 group-hover:text-yt-white">{title}</h3>
    <div class="flex items-center gap-1 text-sm text-gray-400 mt-1">
      <span>{visibility}</span>
      <span>•</span>
      <span>{updatedAt}</span>
    </div>
  </div>
</div>