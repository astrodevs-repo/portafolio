/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-tight": "1.1",
      },
      colors: {
        blackCeniza: "#2D3142",
        Chicle: "#2FE3CE",
      },
      fontFamily: {
        LusitanaBold: ["LusitanaBold"],
        LusitanaLght: ["LusitanaBold"],
        Poppins: ["Poppins"],
        Baskerville: ["Baskerville"],
      },
    },
  },
  plugins: [],
};
