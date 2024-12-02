/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'yt-red': '#4f46e5',
        'yt-bg': {
          light: '#ffffff',
          dark: '#111827'
        },
        'yt-text': {
          light: '#0f0f0f',
          dark: '#ffffff'
        },
        'yt-gray': {
          light: '#f3f4f6',
          dark: '#1f2937'
        },
        'yt-secondary': {
          light: '#4b5563',
          dark: '#9ca3af'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}