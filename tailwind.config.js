const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				primary: ['Montserrat', ...fontFamily.sans],
			},
			colors: {
				primary: {
					400: '#00E0F3',
					500: '#00c4fd',
				},

				bBlue: '#007FFF',
				dark: '#333333',
				yellowIs: '#FFF500',
				lightBlue2: '#59CFEF',
				lightBlue: '#22BFEA',
				darkerBlue: '#0AAAC0',
				hTextBlue: '#0080FF',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
