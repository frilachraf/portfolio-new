import {heroui} from '@heroui/theme';
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js"
  ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // Add your custom font
        },
        colors: {
          primary : "#DD6B20",
        },
      },
    },
  plugins: [heroui()],
  }