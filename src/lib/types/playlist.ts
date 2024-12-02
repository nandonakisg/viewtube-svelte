export interface Playlist {
  id: string;
  title: string;
  thumbnail: string;
  videoCount: number;
  lastUpdated: string;
  visibility: 'public' | 'private' | 'unlisted';
}