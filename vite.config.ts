import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [react()],
  server: {
    port: 8000,
  },
});