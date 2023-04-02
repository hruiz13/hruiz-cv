import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: './',
  vite: {
    base: './',
    build:{
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]'        
        }
      }
    }
  }
});