import { defineConfig } from 'astro/config';

import Config from './src/config.mjs';

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";



// https://astro.build/config
export default defineConfig({
  site: Config.origin,
  base: Config.basePathName,
  
  output: "static",

  integrations: [vue(), tailwind(), image(), partytown(), sitemap(), prefetch()],
  
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src")
      }
    }
  }
});