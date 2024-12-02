import { formatViews, formatDuration } from '../utils/format';

const channels = {
  webDevMasters: {
    name: "WebDev Masters",
    avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop"
  },
  techInsights: {
    name: "TechInsights",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop"
  },
  codeCrafters: {
    name: "CodeCrafters",
    avatar: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop"
  }
};

const rawVideos = [
  // WebDev Masters (8 videos)
  {
    id: 1,
    title: "Advanced SvelteKit Tutorial - Build Modern Web Apps",
    channelId: "webDevMasters",
    rawViews: 342000,
    daysAgo: 5,
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=640&h=360&fit=crop",
    durationInSeconds: 2445
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS - From Basics to Advanced",
    channelId: "webDevMasters",
    rawViews: 156000,
    daysAgo: 8,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop",
    durationInSeconds: 3600
  },
  {
    id: 3,
    title: "Full Stack Development in 2024",
    channelId: "webDevMasters",
    rawViews: 89000,
    daysAgo: 12,
    thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=640&h=360&fit=crop",
    durationInSeconds: 1800
  },
  {
    id: 4,
    title: "Building Real-Time Applications with WebSockets",
    channelId: "webDevMasters",
    rawViews: 67000,
    daysAgo: 15,
    thumbnail: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=640&h=360&fit=crop",
    durationInSeconds: 2100
  },
  {
    id: 5,
    title: "TypeScript Best Practices and Design Patterns",
    channelId: "webDevMasters",
    rawViews: 128000,
    daysAgo: 18,
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=640&h=360&fit=crop",
    durationInSeconds: 2700
  },
  {
    id: 6,
    title: "Modern CSS Techniques and Tips",
    channelId: "webDevMasters",
    rawViews: 95000,
    daysAgo: 22,
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=640&h=360&fit=crop",
    durationInSeconds: 1500
  },
  {
    id: 7,
    title: "Web Performance Optimization Guide",
    channelId: "webDevMasters",
    rawViews: 112000,
    daysAgo: 25,
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&h=360&fit=crop",
    durationInSeconds: 2800
  },
  {
    id: 8,
    title: "Responsive Design Masterclass",
    channelId: "webDevMasters",
    rawViews: 143000,
    daysAgo: 28,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=360&fit=crop",
    durationInSeconds: 3200
  },

  // TechInsights (7 videos)
  {
    id: 9,
    title: "AI in Web Development - 2024 Trends",
    channelId: "techInsights",
    rawViews: 234000,
    daysAgo: 3,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop",
    durationInSeconds: 1200
  },
  {
    id: 10,
    title: "The Future of JavaScript Frameworks",
    channelId: "techInsights",
    rawViews: 187000,
    daysAgo: 7,
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=640&h=360&fit=crop",
    durationInSeconds: 1800
  },
  {
    id: 11,
    title: "Web3 Development Explained",
    channelId: "techInsights",
    rawViews: 156000,
    daysAgo: 10,
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=640&h=360&fit=crop",
    durationInSeconds: 2400
  },
  {
    id: 12,
    title: "Cloud Computing for Developers",
    channelId: "techInsights",
    rawViews: 98000,
    daysAgo: 14,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=360&fit=crop",
    durationInSeconds: 2100
  },
  {
    id: 13,
    title: "Microservices Architecture Deep Dive",
    channelId: "techInsights",
    rawViews: 145000,
    daysAgo: 17,
    thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=640&h=360&fit=crop",
    durationInSeconds: 3000
  },
  {
    id: 14,
    title: "DevOps Best Practices 2024",
    channelId: "techInsights",
    rawViews: 167000,
    daysAgo: 21,
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&h=360&fit=crop",
    durationInSeconds: 2700
  },
  {
    id: 15,
    title: "Kubernetes for Beginners",
    channelId: "techInsights",
    rawViews: 198000,
    daysAgo: 24,
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=640&h=360&fit=crop",
    durationInSeconds: 2900
  },

  // CodeCrafters (6 videos)
  {
    id: 16,
    title: "Building a Real-Time Chat App",
    channelId: "codeCrafters",
    rawViews: 178000,
    daysAgo: 4,
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=640&h=360&fit=crop",
    durationInSeconds: 1800
  },
  {
    id: 17,
    title: "Database Design Patterns",
    channelId: "codeCrafters",
    rawViews: 134000,
    daysAgo: 9,
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=360&fit=crop",
    durationInSeconds: 2400
  },
  {
    id: 18,
    title: "API Development with Node.js",
    channelId: "codeCrafters",
    rawViews: 156000,
    daysAgo: 13,
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=640&h=360&fit=crop",
    durationInSeconds: 2100
  },
  {
    id: 19,
    title: "Testing Strategies for Modern Apps",
    channelId: "codeCrafters",
    rawViews: 89000,
    daysAgo: 16,
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=640&h=360&fit=crop",
    durationInSeconds: 2700
  },
  {
    id: 20,
    title: "Advanced Git Workflows",
    channelId: "codeCrafters",
    rawViews: 112000,
    daysAgo: 20,
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=640&h=360&fit=crop",
    durationInSeconds: 1900
  },
  {
    id: 21,
    title: "Clean Code Principles",
    channelId: "codeCrafters",
    rawViews: 145000,
    daysAgo: 23,
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=640&h=360&fit=crop",
    durationInSeconds: 2500
  }
];

// Process the raw videos to add formatted values and channel information
export const videos = rawVideos.map(video => ({
  ...video,
  channelName: channels[video.channelId].name,
  channelAvatar: channels[video.channelId].avatar,
  views: formatViews(video.rawViews),
  duration: formatDuration(video.durationInSeconds),
  timestamp: `${video.daysAgo} days ago`
}));