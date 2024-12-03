/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
