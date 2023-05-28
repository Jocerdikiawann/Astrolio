import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
    mdx(),
  ],
  output: "server",
  adapter: netlify(),
});
