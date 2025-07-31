import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import ghPages from "vite-plugin-gh-pages";

export default defineConfig(({ mode }) => ({
  base: "/ramazan-vascu-web/", // foarte important pentru GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ghPages(), // adăugăm pluginul de deploy
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
