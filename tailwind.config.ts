import plugin from "tailwindcss/plugin";
import scrollbarHide from "./tailwind-config/plugins/scrollbar-hide";
import translateHalf from "./tailwind-config/plugins/translate-half";
import borderRadius from "./tailwind-config/tokens/borderRadius";
import colors from "./tailwind-config/tokens/colors";
import fontFamily from "./tailwind-config/tokens/fontFamily";
import spacing from "./tailwind-config/tokens/spacing";
import typography from "./tailwind-config/tokens/typography";

const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors,
		spacing,
		fontFamily,
		borderRadius,
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [
		scrollbarHide,
		translateHalf,
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
