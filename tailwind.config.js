/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  daisyui: {
    themes: [
      "synthwave",
      {
        startupSprint2024 : {
          primary: "#00a6e2",

          secondary: "#ffa836",

          accent: "#919be0",

          neutral: "#d1d3d7",

          "base-100": "#290B3E",

          info: "#78a7dd",

          success: "#116f41",

          warning: "#f9da6c",

          error: "#f87263",
        },
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
