import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212", // Very dark grey
        surface: "#1E1E1E",    // Slightly lighter for cards
        primary: "#FF4D4D",    // The "Red Panda" red
        secondary: "#00E5FF",  // The cyan accent seen in the middle card
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // Google font
      },
    },
  },
  plugins: [],
};
export default config;