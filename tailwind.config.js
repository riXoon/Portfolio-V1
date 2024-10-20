/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit']
      },
      maxWidth: {
        'tXl': '800px',
      },

      colors: {
        deepPurple: "#2d1b42",
        mutedFuchsia: "#311532",
      }
    },
  },
  plugins: [],
}

