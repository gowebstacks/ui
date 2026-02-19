import { defineConfig } from "tsup";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  injectStyle: false,
  esbuildOptions(options) {
    options.alias = {
      "@": resolve(__dirname, "./src"),
    };
    options.banner = {
      js: '"use client";',
    };
  },
});
