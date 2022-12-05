/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'expense-2': 'repeat(minmax(300px, 500px))',
      },
    },
  },
  plugins: [],
}
