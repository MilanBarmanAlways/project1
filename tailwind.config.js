/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Saira: ["Saira", "sans-serif"],
      },
      colors: {
        main_bg_color: "#15171a",
        text_color: "#AAAAAA",
        btn_color: "#cf1f1f",
      },
      backgroundImage: {
        heroimg: "url('./assets/heroimg.jpeg')",
        jaralaximg1: "url('./assets/image3.jpeg')",
        aboutjaralax: "url('./assets/aboutjaralax.jpeg')",
        myresumejaralax: "url('./assets/resumejaralax.jpeg')",
        contactjaralax: "url('./assets/contactimg.jpeg')",
      },
    },
  },
  plugins: [],
};
