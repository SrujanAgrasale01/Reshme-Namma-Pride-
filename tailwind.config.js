/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "reshme-green": "#023216",
        "reshme-amber": "#ea900a",
        "reshme-red": "#901507",
        "reshme-gold": "#38803a",
        "reshme-silk": "#ced1cd",
        "reshme-dark": "#1e1e4f",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
};
