/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'yt-black': '#0f0f0f',
        'yt-red': '#ff0000',
        'yt-white': '#ffffff',
        'yt-gray': '#272727',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}