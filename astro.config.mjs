import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nurkholid.my.id",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
    mdx(),
    sitemap({
      filter: (page) =>
        page == "https://nurkholid.my.id/" &&
        page == "https://nurkholid.my.id/aboutme" &&
        page == "https://nurkholid.my.id/blog",
    }),
  ],
});
