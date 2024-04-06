/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "parallax": 'url("/public/bg_island.webp")'
      },

      colors: {
        wave_blue: '#14485B',
      },
    },
    
  },
  plugins: [],
};
