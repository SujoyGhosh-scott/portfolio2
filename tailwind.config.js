module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#66fcf1",
          secondary: "#45a29e",
          accent: "#c5c6c7",
          neutral: "#1f2833",
          "base-100": "#0b0c10",
        },
      },
    ],
  },
};
