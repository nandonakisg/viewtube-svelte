import { formatViews, formatDuration } from '../utils/format';

const rawVideos = [
  {
    id: 1,
    title: "Building a YouTube Clone with SvelteKit",
    channelName: "TechTutorials",
    views: 125000,
    timestamp: "2 days ago",
    thumbnail: "https://picsum.photos/seed/1/640/360",
    channelAvatar: "https://picsum.photos/seed/avatar1/100/100",
    durationInSeconds: 754
  },
  {
    id: 2,
    title: "Learn Web Development in 2024 - Complete Roadmap",
    channelName: "CodeMaster",
    views: 89000,
    timestamp: "1 week ago",
    thumbnail: "https://picsum.photos/seed/2/640/360",
    channelAvatar: "https://picsum.photos/seed/avatar2/100/100",
    durationInSeconds: 1515
  },
  {
    id: 3,
    title: "5 JavaScript Tips You Need to Know",
    channelName: "WebDev Pro",
    views: 256000,
    timestamp: "3 days ago",
    thumbnail: "https://picsum.photos/seed/3/640/360",
    channelAvatar: "https://picsum.photos/seed/avatar3/100/100",
    durationInSeconds: 525
  }
];

export const mockVideos = rawVideos.map(video => ({
  ...video,
  views: formatViews(video.views),
  duration: formatDuration(video.durationInSeconds)
}));