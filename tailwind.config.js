/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Blue": "hsl(233, 26%, 24%)",
        "Lime-Green": "hsl(136, 65%, 51%)",
        "Bright-Cyan": "hsl(192, 70%, 51%)",

        "Grayish-Blue": "hsl(233, 8%, 62%)",
        "Light-Grayish-Blue": "hsl(220, 16%, 96%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "intro-mobile": "url('./src/assets/bg-intro-mobile.svg')",
        "intro-desktop": "url('./src/assets/bg-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
