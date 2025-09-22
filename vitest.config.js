import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /.*\.(js|jsx|ts|tsx)$/,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setupTests.js"],
    globals: true,
  },
});
