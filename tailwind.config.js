/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#185ABC',
					secondary: '#00965C',
					accent: '#280559',
					'base-100': '#ffffff',
					'base-200': '#8B909A ',
					'base-300': '#fafafa',
					success: '#11AF22 ',
					error: '#DB0D4B ',
				},
			},
		],
	},
};
