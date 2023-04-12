/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        regalblue: "#FFA500",
        regalbrown: "#313131",
        regalyellow: "#DAB953",
        regalLightgray: "#585754",
        regalDarkgray: "#353432",
      },
      backgroundImage: {
        "hero-pattern": "url('./images/image.jpg')",
      },
    },
  },
  plugins: [],
};
