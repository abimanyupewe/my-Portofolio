/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/App.jsx",
    "src/pages/**/*.{js,jsx,ts,tsx}",
    "src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins',],
        ubuntu: ['Ubuntu'],
      },
      colors: {
        gelap: "#191825",
      },
    },
  },
  plugins: [],
};
