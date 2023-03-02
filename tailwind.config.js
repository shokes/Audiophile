const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-manrope)', ...fontFamily.sans],
    },
    fontSize: {
      xs: ['15px', { lineHeight: '25px' }],
      sm: ['13px', { lineHeight: '25px', letterSpacing: '2px' }],
      base: ['14px', { lineHeight: '19px', letterSpacing: '10px' }],
      lg: ['18px', { lineHeight: '24px', letterSpacing: '1.3px' }],
      xl: ['24px', { lineHeight: '33px', letterSpacing: '1.7px' }],
      logo: [
        '24px',
        {
          lineHeight: '1px',
          letterSpacing: '0.8px',
          fontWeight: '800',
        },
      ],
      // Headings H6 - H1
      '2xl': ['28px', { lineHeight: '38px', letterSpacing: '2px' }],
      '3xl': ['32px', { lineHeight: '36px', letterSpacing: '1.15px' }],
      '4xl': ['40px', { lineHeight: '44px', letterSpacing: '1.5px' }],
      '5xl': ['56px', { lineHeight: '58px', letterSpacing: '2px' }],
      '6xl': ['78px', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        brand: {
          amber: '#D87D4A',
          pastelYellow: '#FBAF85',
        },
        brandBlack: {
          50: '#101010',
          100: '#000000',
        },

        brandGray: {
          100: '#FAFAFA',
          200: '#F1F1F1',
          300: '#4C4C4C',
        },
      },
    },
  },
};
