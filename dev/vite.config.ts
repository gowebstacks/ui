import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { resolve } from "path";

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: resolve(__dirname, "../tailwind.config.ts") }),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  },
});
