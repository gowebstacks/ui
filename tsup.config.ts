import { defineConfig, type Options } from "tsup";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const shared: Options = {
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
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
};

export default defineConfig([
  {
    ...shared,
    entry: ["src/index.ts"],
    outDir: "dist",
    clean: true,
  },
  {
    ...shared,
    entry: ["src/product/index.ts"],
    outDir: "dist/product",
    clean: false,
  },
]);
