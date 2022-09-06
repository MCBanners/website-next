import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), image(), partytown(), sitemap(), prefetch()]
});