/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d6781c",
          light: "#fdba74",
          dark: "#c2410c",
        },
        secondary: {
          DEFAULT: "#292524",
          light: "#44403c",
          dark: "#1c1917",
        },
        background: {
          DEFAULT: "#faf6f1",
          light: "#ffffff",
          dark: "#e7e5e4",
        },
      },
    },
  },
  plugins: [],
};