/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "972px",
      },
    },
    extend: {
      fontFamily: {
        spaceMono: " 'Space Mono', monospace",
      },
      colors: {
        myPink: "#CC0088",
        myDark: "#16191D",
        myBlue: "#0B89EA",
        myGray: "#868e96",
        darkHover: "#212529",
        whiteHover: "#F1F3F5",
        themeColor: "#E8A698",
        themeSoftColor: "#e8a6983b",
        secondThemeColor: "#ffb4a7",
        myWhite: "#f1f3f573",
      },
    },
    keyframes: {
      shake: {
        "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
        "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
        "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
        "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
        "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
        "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
        "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
        "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
        "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
        "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
        "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
      },
    },
    animation: {
      shake: "shake 0.7s ",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
