import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7AB2D3",
        light: "#B9E5E8",
        background: "#DFF2EB",
        foreground: "#4A628A",
      },
    },
  },
  plugins: [],
} satisfies Config;
