import { page } from '../stores/page';

export function navigate(path: string) {
  // Update URL without page reload
  window.history.pushState({}, '', path);
  
  // Update page store based on new URL
  if (path.includes('search')) {
    page.set({ name: 'search' });
  } else if (path.includes('playlists')) {
    const urlParams = new URLSearchParams(path.split('?')[1] || '');
    const playlistId = urlParams.get('id') || urlParams.get('list');
    page.set({ 
      name: playlistId ? 'playlist' : 'playlists',
      params: playlistId ? { id: playlistId } : undefined
    });
  } else {
    page.set({ name: 'home' });
  }
}