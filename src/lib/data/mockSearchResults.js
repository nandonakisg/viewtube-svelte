import { formatViews, formatDuration } from '../utils/format';

const rawResults = [
  {
    id: 'sr1',
    title: "Advanced SvelteKit Tutorial - Build Modern Web Apps",
    channelName: "WebDev Masters",
    views: 342000,
    timestamp: "1 month ago",
    thumbnail: "https://picsum.photos/seed/sr1/640/360",
    channelAvatar: "https://picsum.photos/seed/sra1/100/100",
    durationInSeconds: 2445,
    description: "Learn advanced SvelteKit concepts including stores, animations, and server-side rendering. Perfect for intermediate developers looking to level up their skills."
  },
  {
    id: 'sr2',
    title: "Web Development Trends 2024 - What's New?",
    channelName: "TechInsights",
    views: 128000,
    timestamp: "5 days ago",
    thumbnail: "https://picsum.photos/seed/sr2/640/360",
    channelAvatar: "https://picsum.photos/seed/sra2/100/100",
    durationInSeconds: 1256,
    description: "Explore the latest web development trends including AI integration, WebAssembly, and new JavaScript features that are shaping the future of web development."
  },
  {
    id: 'sr3',
    title: "Build a Full-Stack App with SvelteKit and Prisma",
    channelName: "CodeCrafters",
    views: 89000,
    timestamp: "2 weeks ago",
    thumbnail: "https://picsum.photos/seed/sr3/640/360",
    channelAvatar: "https://picsum.photos/seed/sra3/100/100",
    durationInSeconds: 3600,
    description: "Step-by-step guide to building a full-stack application using SvelteKit and Prisma. Includes authentication, database design, and deployment."
  }
];

export const mockSearchResults = rawResults.map(result => ({
  ...result,
  views: formatViews(result.views),
  duration: formatDuration(result.durationInSeconds)
}));