/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "synthwave",
      {
        dark: {
          primary: "#00a6e2",

          secondary: "#ffa836",

          accent: "#919be0",

          neutral: "#d1d3d7",

          "base-100": "#262e3f",

          info: "#78a7dd",

          success: "#116f41",

          warning: "#f9da6c",

          error: "#f87263",
        },
      },
    ],
  },
};
