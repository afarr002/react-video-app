import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.js.dev/config

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

// establishes server port
