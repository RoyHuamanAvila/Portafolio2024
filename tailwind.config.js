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
        ".section-container": {
          boxSizing: "border-box",
          paddingTop: "64px",
          paddingBottom: "24px",
          height: "100vh",
          minHeight: "800px",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
