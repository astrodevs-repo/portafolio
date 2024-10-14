import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression"; // Asegúrate de que la importación sea correcta

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip", // O 'brotli', según prefieras
      deleteOriginFile: false, // No eliminar archivos originales
    }),
  ],
  base: "/", // Asegúrate de que esta ruta esté correctamente configurada
});
