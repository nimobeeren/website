import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      rehypePlugins: [rehypeSlug],
    }),
  ],
});
