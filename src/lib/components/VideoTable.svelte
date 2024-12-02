<script>
  export let videos = [];
  export let groupByChannel = false;
  
  $: groupedVideos = groupByChannel
    ? videos.reduce((acc, video) => {
        const channel = acc.find(g => g.channelName === video.channelName);
        if (channel) {
          channel.videos.push(video);
        } else {
          acc.push({
            channelName: video.channelName,
            channelAvatar: video.channelAvatar,
            videos: [{ ...video }]
          });
        }
        return acc;
      }, []).sort((a, b) => b.videos.length - a.videos.length)
    : null;
</script>

{#if groupByChannel && groupedVideos}
  <div class="space-y-8">
    {#each groupedVideos as group}
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <img src={group.channelAvatar} alt={group.channelName} class="w-12 h-12 rounded-full" />
          <h2 class="text-xl font-semibold">{group.channelName}</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-yt-gray-light dark:bg-yt-gray-dark">
              <tr>
                <th class="text-left px-1.5 py-1 font-medium text-sm">Title</th>
                <th class="text-left px-1.5 py-1 font-medium text-sm">Views</th>
                <th class="text-left px-1.5 py-1 font-medium text-sm">Duration</th>
                <th class="text-left px-1.5 py-1 font-medium text-sm">Age</th>
                <th class="text-left px-1.5 py-1 font-medium text-sm">Date</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-yt-gray-light dark:divide-yt-gray-dark">
              {#each group.videos as video}
                <tr class="hover:bg-yt-gray-light/50 dark:hover:bg-yt-gray-dark/50">
                  <td class="px-1.5 py-0.5">
                    <div class="flex items-center gap-2">
                      <div class="relative w-12 aspect-video rounded overflow-hidden bg-yt-gray-light dark:bg-yt-gray-dark flex-shrink-0">
                        <img src={video.thumbnail} alt="" class="w-full h-full object-cover" />
                      </div>
                      <span class="line-clamp-1 text-sm">{video.title}</span>
                    </div>
                  </td>
                  <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.views}</td>
                  <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.duration}</td>
                  <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.timestamp}</td>
                  <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.date}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div class="overflow-x-auto">
  <table class="w-full text-sm">
    <thead class="bg-yt-gray-light dark:bg-yt-gray-dark">
      <tr>
        <th class="text-left px-1.5 py-1 font-medium text-sm">Title</th>
        <th class="text-left px-1.5 py-1 font-medium text-sm">Channel</th>
        <th class="text-left px-1.5 py-1 font-medium text-sm">Views</th>
        <th class="text-left px-1.5 py-1 font-medium text-sm">Duration</th>
        <th class="text-left px-1.5 py-1 font-medium text-sm">Age</th>
        <th class="text-left px-1.5 py-1 font-medium text-sm">Date</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-yt-gray-light dark:divide-yt-gray-dark">
      {#each videos as video}
        <tr class="hover:bg-yt-gray-light/50 dark:hover:bg-yt-gray-dark/50">
          <td class="px-1.5 py-0.5">
            <div class="flex items-center gap-2">
              <div class="relative w-12 aspect-video rounded overflow-hidden bg-yt-gray-light dark:bg-yt-gray-dark flex-shrink-0">
                <img src={video.thumbnail} alt="" class="w-full h-full object-cover" />
              </div>
              <span class="line-clamp-1 text-sm">{video.title}</span>
            </div>
          </td>
          <td class="px-1.5 py-0.5">
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 rounded-full overflow-hidden bg-yt-gray-light dark:bg-yt-gray-dark flex-shrink-0">
                <img src={video.channelAvatar} alt="" class="w-full h-full object-cover" />
              </div>
              <span class="whitespace-nowrap text-sm">{video.channelName}</span>
            </div>
          </td>
          <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.views}</td>
          <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.duration}</td>
          <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.timestamp}</td>
          <td class="px-1.5 py-0.5 whitespace-nowrap text-sm">{video.date}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  </div>
{/if}