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
        background: "#0A0A0F",
        card: "#12121A",
        border: "#1E1E2E",
        purple: {
          DEFAULT: "#6C63FF",
          soft: "rgba(108, 99, 255, 0.15)",
          glow: "rgba(108, 99, 255, 0.4)",
        },
        teal: {
          DEFAULT: "#00D4AA",
          soft: "rgba(0, 212, 170, 0.15)",
          glow: "rgba(0, 212, 170, 0.4)",
        },
        danger: {
          DEFAULT: "#FF4D6D",
          soft: "rgba(255, 77, 109, 0.15)",
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
