/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small screens (Tablets and larger)
        md: "768px", // Medium screens (Small laptops and larger)
        lg: "1024px", // Large screens (Laptops and larger)
        xl: "1280px", // Extra large screens (Desktops and larger)
        "2xl": "1536px", // 2x extra large screens (Large desktops)
        "3xl": "1920px", // 3x extra large screens (Extra-wide monitors)
      },
      lineHeight: {
        "extra-tight": "1.1",
      },
      colors: {
        blackCeniza: "#2D3142",
        Chicle: "#2FE3CE",
        BlueNeurons: "#89b8fff7",
        dark: {
          blackCeniza: "#1a1a1a",
          Chicle: "#00bfae",
          BlueNeurons: "rgb(124 58 237 / var(--tw-bg-opacity))",
        },
      },
      fontFamily: {
        Lusitana: ["Lusitana", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Baskerville: ["'Libre Baskerville'", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "@font-face": [
          {
            fontFamily: "Poppins",
            src: "url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap) format('woff2')",
            fontDisplay: "swap",
          },
          {
            fontFamily: "Libre Baskerville",
            src: "url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap) format('woff2')",
            fontDisplay: "swap",
          },
        ],
      });
    },
  ],
};
