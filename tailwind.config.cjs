/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '500px',
    },
    maxWidth: {
      '1/2': '50%',
      '1/3': '33%',
      '3/5': '60%',
    },
  },
  plugins: [],
}
