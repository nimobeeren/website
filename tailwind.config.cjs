const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"DM Serif Display"', ...defaultTheme.fontFamily.serif],
      },
      scale: {
        102: "1.02",
      },
      boxShadow: {
        "glow-sm": "0 0 32px 24px theme(colors.sky.100)",
        glow: "0 0 48px 32px theme(colors.sky.100)",
        "glow-lg": "0 0 64px theme(colors.sky.300)",
        "glow-xl": "0 0 128px theme(colors.sky.300)",
      },
      animation: {
        float: "float 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-out",
          },
          "25%": {
            transform: "translateY(10px)",
            "animation-timing-function": "ease-in-out",
          },
          "75%": {
            transform: "translateY(-10px)",
            "animation-timing-function": "ease-in",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
