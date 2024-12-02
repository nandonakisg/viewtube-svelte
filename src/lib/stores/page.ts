import { writable } from 'svelte/store';

// Create a store for the current page
export const page = writable<{ name: string; params?: Record<string, string> }>({ name: 'home' });

// Update page based on URL for demo
if (window.location.pathname.includes('search')) {
  page.set({ name: 'search' });
} else if (window.location.pathname.includes('playlists')) {
  const playlistId = new URLSearchParams(window.location.search).get('id');
  page.set({ 
    name: playlistId ? 'playlist' : 'playlists',
    params: playlistId ? { id: playlistId } : undefined
  });
}