import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: 'https://hruiz13.github.io/hruiz-cv/',
  vite: {
    base: 'https://hruiz13.github.io/hruiz-cv/',
    build:{
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]'
        }
      }
    }
  }
});