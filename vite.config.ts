// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// export default defineConfig(({mode}) => {
//   return {
//     build: {
//       outDir: "dist",
//       assetsDir: 'assets',
//     },
//     plugins: [react()],
//     server: {
//       port: 8000,
//     },
//     test: {
//       exclude: ["**/e2e/**", "**/node_modules/**"],
//     },
//   };
// });
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // rollupOptions: {
    //   input: "src/index.tsx",  
    // },
  },
  plugins: [react()],
  server: {
    port: 8000,
  },
});
