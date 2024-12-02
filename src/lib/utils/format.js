/**
 * Format view count to human readable string
 * @param {number} views
 * @returns {string}
 */
export function formatViews(views) {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}

/**
 * Format duration in seconds to MM:SS format
 * @param {number} seconds
 * @returns {string}
 */
export function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * Format timestamp to relative time
 * @param {string} timestamp
 * @returns {string}
 */
export function formatTimeAgo(timestamp) {
  if (!timestamp) return '';
  
  const periods = {
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000
  };

  const now = new Date();
  const date = new Date(now - Math.random() * 7 * periods.day); // Simulate random recent dates
  const diff = now - date;

  if (diff < periods.hour) {
    const minutes = Math.floor(diff / periods.minute);
    return `${minutes} minutes ago`;
  } else if (diff < periods.day) {
    const hours = Math.floor(diff / periods.hour);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(diff / periods.day);
    return `${days} days ago`;
  }
}