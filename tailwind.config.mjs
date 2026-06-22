/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					bg: '#0b1020',
					primary: {
						50: '#0a0f1f', 100: '#141a2e', 200: '#1d253d',
						300: '#26304c', 400: '#2f3b5b', 500: '#38466a',
						600: '#4a5279', 700: '#5c5e88', 800: '#6e6a97', 900: '#8076a6',
					},
					secondary: {
						50: '#0f172a', 100: '#1e2942', 200: '#2d3b5a',
						300: '#3c4d72', 400: '#4b5f8a', 500: '#5a7182',
						600: '#69839a', 700: '#7895b2', 800: '#88a7ca', 900: '#98b9e2',
					}
				},
				light: {
					primary: {
						50: '#fefdf8', 100: '#fefbed', 200: '#fdf7e1',
						300: '#fdf3d7', 400: '#fcefcd', 500: '#fceb23',
						600: '#fce719', 700: '#fbd30f', 800: '#fbbf05', 900: '#fabb00',
					},
					secondary: {
						50: '#f8f9fb', 100: '#f1f3f7', 200: '#eaedf3',
						300: '#e3e7ef', 400: '#dce0e7', 500: '#d5d9df',
						600: '#ced2d7', 700: '#c7cbd1', 800: '#c0c6cb', 900: '#b9c1c5',
					},
				},
				gold: {
					50: '#fffdf0', 100: '#fef9e3', 200: '#fef5d6',
					300: '#fef1c9', 400: '#fdecbc', 500: '#fde9af',
					600: '#fce5a2', 700: '#fbe195', 800: '#fadd88', 900: '#f9d97b',
				}
			},
			backgroundImage: {
				'grid-bg': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
				'hero-glow': 'radial-gradient(ellipse at 60% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
			},
			boxShadow: {
				'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.15)',
			},
			backgroundSize: {
				'grid': '50px 50px',
			}
		},
	},
	plugins: [],
};
