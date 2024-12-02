<script lang="ts">
  import type { SearchResult } from '../types/search';
  import { formatViews, formatTimestamp } from '../utils/format';
  
  export let result: SearchResult;
</script>

<div class="flex gap-4 mb-4">
  <a href="/watch?v={result.id}" class="flex-shrink-0">
    <img
      src={result.thumbnail}
      alt={result.title}
      class="w-[360px] aspect-video rounded-xl object-cover"
    />
  </a>
  <div class="flex-1">
    <a href="/watch?v={result.id}" class="block">
      <h3 class="text-xl font-semibold mb-1 hover:text-blue-400">
        {result.title}
      </h3>
      <div class="text-sm text-gray-400 mb-2">
        {formatViews(result.views)} views • {formatTimestamp(result.timestamp)}
      </div>
    </a>
    <div class="flex items-center gap-2 mb-2">
      <a href="/channel/{result.channel.id}" class="flex items-center gap-2 hover:text-white">
        <img
          src={result.channel.avatar}
          alt={result.channel.name}
          class="w-6 h-6 rounded-full"
        />
        <span class="text-sm text-gray-400">{result.channel.name}</span>
      </a>
    </div>
    <p class="text-sm text-gray-400 line-clamp-2">
      {result.description}
    </p>
  </div>
</div>