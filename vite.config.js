import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { htmlPrerender } from "vite-plugin-html-prerender";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    htmlPrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: ["/"],
      selector: "footer",
    }),
  ],
});
