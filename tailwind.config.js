/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

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
      serif: ['ModernoFB', ...defaultTheme.fontFamily.serif],
      sans: ['Creo', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ['14px', { lineHeight: '29px' }],
      sm: ['16px', { lineHeight: '29px' }],
      base: ['17px', { lineHeight: '29px' }],
      lg: ['18px', { lineHeight: '32px' }],
      xl: ['20px', { lineHeight: '1' }],
      // Headings H6 - H1
      '2xl': ['22px', { lineHeight: '1' }],
      '3xl': ['32px', { lineHeight: '1' }],
      '4xl': ['60px', { lineHeight: '1' }],
      '5xl': ['68px', { lineHeight: '1' }],
      '6xl': ['78px', { lineHeight: '1' }],
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        brand: {
          50: '#E4D6C5',
          100: '#DECCB8',
          200: '#D1B89C',
          300: '#C4A480',
          400: '#B79064',
          500: '#A57C4D',
          600: '#7F5F3B',
          700: '#594329',
          800: '#322617',
          900: '#0C0906',
        },
        brandGray: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#A3A3A3',
          400: '#888888',
          500: '#707070',
          600: '#464646',
          700: '#282828',
          800: '#212121',
          900: '#191919',
        },
      },
    },
  },
  // plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
