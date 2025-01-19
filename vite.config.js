import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Listen on all IPs (makes it accessible to others on the network)
    port: 3001, // Optional: Specify the port (default is 5173)
  },
});
