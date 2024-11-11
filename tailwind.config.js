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
        // BlueNeurons: "#31add5",
        BlueNeurons: "#89b8fff7",

        dark: {
          blackCeniza: "#1a1a1a", // Example dark mode color for blackCeniza
          Chicle: "#00bfae", // Example dark mode color for Chicle
          BlueNeurons: "rgb(124 58 237 / var(--tw-bg-opacity))", // Example dark mode color for BlueNeurons
        },
      },
      fontFamily: {
        Lusitana: ["Lusitana", "sans-serif"], // Usa la fuente 'Lusitana' en normal
        Poppins: ["Poppins", "sans-serif"], // Usa la fuente 'Poppins' en normal
        Baskerville: ["'Libre Baskerville'", "sans-serif"], // Usa 'Libre Baskerville'
      },
    },
  },
  plugins: [],
};
