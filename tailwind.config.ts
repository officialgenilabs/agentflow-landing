import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#091125",
        emerald: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16, 185, 129, 0.16), 0 24px 80px rgba(16, 185, 129, 0.12)"
      },
      backgroundImage: {
        "radial-emerald": "radial-gradient(circle at top, rgba(16, 185, 129, 0.22), transparent 32%)"
      }
    }
  },
  plugins: []
};

export default config;
