/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 28 column grid
        '28': 'repeat(28, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    backgroundColor: theme => ({
			...theme('colors'),
			primary: '#2B2D42',
			secondary: '#8D99AE',
			terciary: '#EDF2F4',
      solana1: '#9945FF',
      solana2: '#14F195',

      gradientpurple : 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
		}),
    textColor: theme => ({
			...theme('colors'),
			primary: '#2B2D42',
			secondary: '#8D99AE',
			terciary: '#EDF2F4'
		})
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms')
    // ...
  ],
}
