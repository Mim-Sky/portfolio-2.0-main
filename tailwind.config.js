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

      height: {
        '104': '30rem',
      },

      colors: {
        wave_blue: '#14485B',
        secondary_bg: "#A1B5BE",
        text_card: '#23242a',
        text_dark: '#23242a',
        text_light: '#49585D',
        button_teal: '#1D4C61',
        button_steel_blue: '#DAE1E7',
        action_coral: '#C25B56',
        decorative_gold: '#EAE3CB',
      },
    },
  },
  plugins: [],
};
