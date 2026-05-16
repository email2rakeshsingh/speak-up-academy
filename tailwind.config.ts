import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        academy: {
          navy: "#062a55",
          blue: "#0f5ec5",
          sky: "#eaf4ff",
          gold: "#f5b531",
          ink: "#102033"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 42, 85, 0.12)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        countPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        countPulse: "countPulse 2.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
