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
 * Calculate days ago from timestamp
 * @param {number} timestamp
 * @returns {number}
 */
export function getDaysAgo(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  return Math.floor(diff / (24 * 60 * 60 * 1000));
}