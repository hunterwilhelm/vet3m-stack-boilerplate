import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
// @ts-expect-error
import { defineConfig } from "vite";
import electron from "vite-plugin-electron";

export default defineConfig({
  mode: "development",
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    electron([
      {
        entry: "src/main/index.ts",
      },
      {
        entry: "src/main/preload.ts",
        onstart(options) {
          options.reload();
        },
      },
    ]),
  ],
});
