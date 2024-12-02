export interface Channel {
  id: string;
  name: string;
  avatar: string;
}

export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channel: Channel;
  views: number;
  timestamp: string;
}