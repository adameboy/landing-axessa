/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8438FF',
        'primary-50': '#FCF5FF',
        'primary-100': '#F8EBFF',
        'primary-200': '#ECCFFF',
        'primary-400': '#B773FF',
        'primary-600': '#712EE6',
      }
    },
  },
  plugins: [],
}

