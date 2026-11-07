import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Compile JSX/TSX.
  plugins: [react()],
  resolve: {
    // Resolve "@/..." imports from tsconfig.json, like the app does.
    tsconfigPaths: true,
  },
  test: {
    // Simulated browser DOM so components can render in Node.
    environment: "jsdom",
    // Run vitest.setup.ts before each test file (it adds cleanup).
    setupFiles: ["./vitest.setup.ts"],
  },
});
