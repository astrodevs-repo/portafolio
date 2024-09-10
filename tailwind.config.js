/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-tight": "1.1",
      },
      colors: {
        blackCeniza: "#2D3142",
        Chicle: "#2FE3CE",
        BlueNeurons: "#31add5",
        //        BlueNeurons: "#89b8fff7",

        dark: {
          blackCeniza: "#1a1a1a", // Example dark mode color for blackCeniza
          Chicle: "#00bfae", // Example dark mode color for Chicle
          BlueNeurons: "rgb(124 58 237 / var(--tw-bg-opacity))", // Example dark mode color for BlueNeurons
        },
      },
      fontFamily: {
        LusitanaBold: ["LusitanaBold"],
        LusitanaLght: ["LusitanaBold"],
        Poppins: ["Poppins"],
        PoppinsBold: ["PoppinsBold"],
        Baskerville: ["Baskerville"],
      },
    },
  },
  plugins: [],
};
