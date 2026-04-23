import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f4001e",
        "primary-dark": "#a30000",
        "primary-light": "#ff6666",
        accent: "#13244f",
        background: "#ececec",
      },
      boxShadow: {
        card: "0 2px 16px rgba(19,36,79,0.08)",
      },
      fontFamily: {
        impact: [
          "Impact",
          "Haettenschweiler",
          '"Arial Narrow Bold"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
