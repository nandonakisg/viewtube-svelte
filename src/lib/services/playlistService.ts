import type { Playlist } from '../types/playlist';
import type { Video } from '../types/video';
import playlistData from '../data/playlists.json';
import playlistVideosData from '../data/playlistVideos.json';

export async function getPlaylists(): Promise<Playlist[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return playlistData.playlists;
}

export async function getPlaylistById(id: string): Promise<Playlist | undefined> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return playlistData.playlists.find(playlist => playlist.id === id);
}

export async function getPlaylistVideos(id: string): Promise<{ 
  videos: Video[], 
  title: string, 
  description: string 
} | undefined> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return playlistVideosData[id as keyof typeof playlistVideosData];
}