/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "iphone": "320px",
      },
      colors: {
        "purpley": "#4433F4",
        "darkpurp": "#3a0589"
      },
      boxShadow: {
        "glow": "2px 2px 2px #00000080, 10px 1px 12px #00000080, 2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080;"
      },
    
    },
  },
  plugins: [],
}