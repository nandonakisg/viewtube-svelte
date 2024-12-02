<script lang="ts">
  import VideoList from './VideoList.svelte';
  import { getVideos } from '../services/videoService';
  import type { Video } from '../types/video';

  let videos: Video[] = $state([]);
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function loadVideos() {
    try {
      loading = true;
      error = null;
      videos = await getVideos();
    } catch (e) {
      error = 'Failed to load videos';
      console.error(e);
    } finally {
      loading = false;
    }
  }

  loadVideos();
</script>

<VideoList {videos} {loading} {error} onRetry={loadVideos} />