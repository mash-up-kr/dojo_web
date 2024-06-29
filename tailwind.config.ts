import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import backgroundLinear from "./tailwind-config/plugins/bg-linear";
import bubbleArrow from "./tailwind-config/plugins/bubble-arrow";
import scrollbarHide from "./tailwind-config/plugins/scrollbar-hide";
import translateHalf from "./tailwind-config/plugins/translate-half";
import borderRadius from "./tailwind-config/tokens/borderRadius";
import colors from "./tailwind-config/tokens/colors";
import fontFamily from "./tailwind-config/tokens/fontFamily";
import typography from "./tailwind-config/tokens/typography";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    fontFamily,
    borderRadius,
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        "zoom-sm": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        zoom: "zoom 0.5s ease-in-out forwards",
        "zoom-sm": "zoom-sm 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [
    scrollbarHide,
    translateHalf,
    backgroundLinear,
    bubbleArrow,
    plugin(({ addComponents }) => {
      addComponents({ ...typography });
    }),
  ],
  safeList: [...Object.keys(typography).map((key) => key)],
} as const;

export type TailwindConfig = typeof config;

export type KeyOfTheme<T extends keyof TailwindConfig["theme"]> =
  keyof TailwindConfig["theme"][T];

export type ValueOfTheme<T extends keyof TailwindConfig["theme"]> =
  TailwindConfig["theme"][T][KeyOfTheme<T>];

export default config;
