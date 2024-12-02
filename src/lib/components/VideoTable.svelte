<script>
  import { formatDuration } from '$lib/utils/format';
  export let videos = [];
</script>

<div class="overflow-x-auto">
  <table class="w-full text-sm">
    <thead class="bg-yt-gray-light dark:bg-yt-gray-dark">
      <tr>
        <th class="text-left p-3 font-medium">Title</th>
        <th class="text-left p-3 font-medium">Channel</th>
        <th class="text-left p-3 font-medium">Views</th>
        <th class="text-left p-3 font-medium">Duration</th>
        <th class="text-left p-3 font-medium">Age</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-yt-gray-light dark:divide-yt-gray-dark">
      {#each videos as video}
        <tr class="hover:bg-yt-gray-light/50 dark:hover:bg-yt-gray-dark/50">
          <td class="p-3">
            <div class="flex items-center gap-3">
              <div class="relative w-24 aspect-video rounded-md overflow-hidden bg-yt-gray-light dark:bg-yt-gray-dark flex-shrink-0">
                <img src={video.thumbnail} alt="" class="w-full h-full object-cover" />
                <div class="absolute bottom-1 right-1 bg-black/80 px-1 text-[10px] rounded">
                  {video.duration}
                </div>
              </div>
              <span class="line-clamp-2">{video.title}</span>
            </div>
          </td>
          <td class="p-3">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-yt-gray-light dark:bg-yt-gray-dark flex-shrink-0">
                <img src={video.channelAvatar} alt="" class="w-full h-full object-cover" />
              </div>
              <span>{video.channelName}</span>
            </div>
          </td>
          <td class="p-3">{video.views}</td>
          <td class="p-3">{video.duration}</td>
          <td class="p-3">{video.timestamp}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>