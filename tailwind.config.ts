import {heroui} from '@heroui/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js"
  ],
    theme: {
      extend: {},
    },
  plugins: [heroui()],
  }