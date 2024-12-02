# YouTube Clone Requirements

## Overview
A modern YouTube clone built with SvelteKit, featuring a clean and responsive interface that closely mirrors YouTube's design and functionality.

## Core Features

### Layout
- Responsive layout with sidebar and main content area
- Fixed top navigation bar
- Collapsible sidebar with navigation links
- Main content area with video grid

### Navigation
- Home page with video grid
- Search functionality
- Playlist management
- Responsive design for all screen sizes

### Components

#### Top Navigation Bar
- YouTube logo/branding
- Search bar with voice search option
- User actions (create, notifications, profile)
- Responsive design elements

#### Sidebar Navigation
- Home section
- Search results section
- Playlists section
- Collapsible design
- Icon + text navigation items

#### Video Grid
- Responsive grid layout
- Video thumbnails with duration
- Channel information
- View count and timestamp
- Hover effects

### UI/UX Requirements
- Modern, clean interface
- YouTube-like color scheme
- Smooth transitions and animations
- Responsive design breakpoints
- Hover states and interactions

### Technical Requirements
- Built with SvelteKit
- TailwindCSS for styling
- Responsive images
- Format utilities for views/duration
- Mock data structure for videos

## Data Structure

### Video Object
```typescript
interface Video {
  id: number
  title: string
  channelName: string
  views: string
  timestamp: string
  thumbnail: string
  channelAvatar: string
  duration: string
}
```

## Styling
- Dark theme matching YouTube
- Custom color variables
- Tailwind configuration for YouTube-specific colors
- Responsive breakpoints
- Aspect ratio handling for thumbnails