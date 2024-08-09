/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "00FF99",
        200: "00DF7C",
        300: "00983D",
      },
      complementary: {
        100: "FF0066",
      },
      gray: {
        100: "DADADA",
      },
      background: {
        100: "333333",
        200: "434343",
        300: "5C5C5C",
      },
    },
  },
  plugins: [],
};
