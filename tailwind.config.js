/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily:{
      primary: "var(--font-jetBrainsMono)",
    },
    backgroundImage: {
      'logo': "url('../public/assets/work/logo.png')",
    },
    extend: {
      colors:{
        transparent: 'transparent',
        primary:'#2E4C9D',
        secondary:'#CEA9AE',
        third:'#E4DCBE',
        accent:{
          DEFAULT:'#E6D33D',
          hover:'#E64027',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}