import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom") ||
              id.includes("react-helmet-async")
            ) {
              return "vendor-react";
            }
            if (id.includes("i18next")) {
              return "vendor-i18n";
            }
            if (id.includes("lucide-react") || id.includes("react-icons")) {
              return "vendor-icons";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});