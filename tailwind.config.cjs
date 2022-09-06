const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	darkMode: "class",
	plugins: [],
}
