/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "plm-red": "#800000",
        "plm-gold" : "#AB840E", 
        "plm-bg" : "#F0F0F0",
      }
    },
  },
  plugins: [],
  
}

