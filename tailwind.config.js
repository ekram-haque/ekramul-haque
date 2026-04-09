export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  darkMode: "class", // or 'media' for system preference
  theme: {
    extend: {
      fontFamily: {
        // we'll add fonts here
        sans: ["Inter", "sans-serif"], // default for dark/modern
        serif: ["Merriweather", "serif"], // newspaper vibe for light
      },
    },
  },
  plugins: [],
};
