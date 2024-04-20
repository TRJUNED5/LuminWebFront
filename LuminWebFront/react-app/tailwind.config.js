/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        '2xs': '360px',
        '3xs': '200px',
      },
    },
  },
  plugins: [],
};
