/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "container-bg":"url('/bg.svg')",
      },
      colors: {
        customBlue: '#2148C0',
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'semibold': 600,
        'bold':700,
      },
      placeholderFontWeight: {
        'light': 'lighter',
      },
    },
  },
  plugins: [],
};
