import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
});
