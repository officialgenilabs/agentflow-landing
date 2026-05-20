import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#121214",
        border: "#1C1C22",
        primary: {
          DEFAULT: "#00E599",
          soft: "rgba(0, 229, 153, 0.12)",
          glow: "rgba(0, 229, 153, 0.35)",
        },
        secondary: {
          DEFAULT: "#6C63FF",
          soft: "rgba(108, 99, 255, 0.12)",
          glow: "rgba(108, 99, 255, 0.35)",
        },
        danger: {
          DEFAULT: "#FF2A5F",
          soft: "rgba(255, 42, 95, 0.12)",
        },
        muted: "#9E9EAF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
