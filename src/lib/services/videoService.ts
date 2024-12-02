import type { Video } from '../types/video';
import videoData from '../data/videos.json';

export async function getVideos(): Promise<Video[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return videoData.videos;
}

export async function getVideoById(id: string): Promise<Video | undefined> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return videoData.videos.find(video => video.id === id);
}