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
        background: "#050508",
        surface: "#0D0D14",
        border: "#1E1E2E",
        primary: {
          DEFAULT: "#0BFF99",
          soft: "rgba(11, 255, 153, 0.15)",
          glow: "rgba(11, 255, 153, 0.4)",
        },
        secondary: {
          DEFAULT: "#6C63FF",
          soft: "rgba(108, 99, 255, 0.15)",
          glow: "rgba(108, 99, 255, 0.4)",
        },
        danger: {
          DEFAULT: "#FF2A5F",
          soft: "rgba(255, 42, 95, 0.15)",
        },
        muted: "#A0A0B8",
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
