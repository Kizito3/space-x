/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/Hero.jpg')",
        "hero-bg2": "url('/public/background-home-tablet.jpg')",
        "hero-bg3": "url('/public/background-home-mobile.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
