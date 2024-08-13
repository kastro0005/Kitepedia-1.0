/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        Mobile: "480px",
        Tablet: "768px",
        Laptop: "1280px",
        Desktop: "1920px",
      },
    },
  },
  plugins: [],
};
