/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#00FF99",
        200: "#00DF7C",
        300: "#00983D",
      },
      complementary: {
        100: "#FF0066",
      },
      gray: {
        100: "#DADADA",
      },
      background: {
        100: "#333333",
        200: "#434343",
        300: "#5C5C5C",
      },
    },
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
      serif: ["Commissioner", "serif"],
    },
    fontSize: {
      "2xl": "1.5rem",
      "4xl": "2.5rem",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".sections-container": {
          boxSizing: "border-box",
          minHeight: "100vh",
          padding: "4rem 1rem 1.5rem 1rem",
        },
        ".label-section": {
          color: "#5C5C5C",
          fontSize: "1rem",
          letterSpacing: "0.25em",
        },
        ".title-section": {
          color: "#00FF99",
          fontSize: "1.5rem",
          fontWeight: "500",
        },
        ".paragraph-section": {
          color: "#DADADA",
          fontSize: "1rem",
          lineHeight: "1.5",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
