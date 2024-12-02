<script lang="ts">
  import type { Video } from '../types/video';
  import type { SearchResult } from '../types/search';
  import { formatViews, formatTimestamp } from '../utils/format';
  
  const props = $props<{
    video: Video | SearchResult;
  }>();
  
  const isSearchResult = $derived('description' in props.video);
</script>

<div class="flex flex-col gap-2">
  <a href="/watch" class="relative aspect-video rounded-xl overflow-hidden">
    <img
      src={props.video.thumbnail}
      alt={props.video.title}
      class="object-cover w-full h-full"
    />
  </a>
  <div class="flex gap-2">
    <a href="/channel" class="flex-shrink-0">
      <img
        class="w-9 h-9 rounded-full"
        src={props.video.channel.avatar}
        alt={props.video.channel.name}
      />
    </a>
    <div class="flex flex-col">
      <a href="/watch" class="font-medium line-clamp-2">
        {props.video.title}
      </a>
      {#if isSearchResult}
        <p class="text-sm text-gray-400 line-clamp-2 mt-1">
          {(props.video as SearchResult).description}
        </p>
      {/if}
      <a href="/channel" class="text-sm text-gray-400 hover:text-white">
        {props.video.channel.name}
      </a>
      <div class="text-sm text-gray-400">
        {formatViews(props.video.views)} views • {formatTimestamp(props.video.timestamp)}
      </div>
    </div>
  </div>
</div>