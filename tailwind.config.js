/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          dark: '#03120f',       // Very dark green for background
          surface: '#082f25',    // Slightly lighter dark green for cards
          primary: '#1d6e53',    // Deep wisdom green
          accent: '#cba358',     // Dull gold/sunlight hue
          light: '#fdfbf4',      // Off-white papyrus for light mode
          leaf: '#4ccfa0',       // Bright energy green
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'], // Gives a touch of wisdom/tradition
      }
    },
  },
  plugins: [],
}
