/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        backgroundColor: "#0E393F",
        cardBackgroundColor: "#0D7C85"
      }
       },
  },
  plugins: [],
}

