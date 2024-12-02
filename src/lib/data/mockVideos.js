import { formatViews, formatDuration } from '../utils/format';

const rawVideos = [
  {
    id: 1,
    title: "Building a YouTube Clone with SvelteKit",
    channelName: "TechTutorials",
    rawViews: 125000,
    rawTimestamp: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
    daysAgo: 2,
    thumbnail: "https://picsum.photos/seed/1/640/360",
    channelAvatar: "https://picsum.photos/seed/avatar1/100/100",
    durationInSeconds: 754
  },
  {
    id: 2,
    title: "Learn Web Development in 2024 - Complete Roadmap",
    channelName: "CodeMaster",
    rawViews: 89000,
    rawTimestamp: Date.now() - 7 * 24 * 60 * 60 * 1000, // 1 week ago
    daysAgo: 7,
    thumbnail: "https://picsum.photos/seed/2/640/360",
    channelAvatar: "https://picsum.photos/seed/avatar2/100/100",
    durationInSeconds: 1515
  },
  {
    id: 3,
    title: "5 JavaScript Tips You Need to Know",
    channelName: "WebDev Pro",
    rawViews: 256000,
    rawTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
    daysAgo: 3,
    thumbnail: "https://picsum.photos/seed/3/640/360",
    channelAvatar: "https://picsum.photos/seed/avatar3/100/100",
    durationInSeconds: 525
  }
];

export const mockVideos = rawVideos.map(video => ({
  ...video,
  views: formatViews(video.rawViews),
  duration: formatDuration(video.durationInSeconds),
  timestamp: `${video.daysAgo} days ago`
}));