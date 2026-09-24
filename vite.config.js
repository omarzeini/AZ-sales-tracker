import { defineConfig } from "vite";
import { resolve } from "node:path";

const pages = [
  "index",
  "about-page",
  "add_sale",
  "auth",
  "business",
  "guide",
  "home",
  "insights",
  "privacy-policy",
  "recover",
  "summary",
  "terms",
  "update",
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, resolve(__dirname, `${page}.html`)]),
      ),
    },
  },
});
