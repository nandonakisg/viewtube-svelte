/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'yt-red': '#cc0000',
        'yt-bg': {
          light: '#ffffff',
          dark: '#0f0f0f'
        },
        'yt-text': {
          light: '#0f0f0f',
          dark: '#ffffff'
        },
        'yt-gray': {
          light: '#f2f2f2',
          dark: '#272727'
        },
        'yt-secondary': {
          light: '#606060',
          dark: '#aaaaaa'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}