/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    
      keyframes: {
        "text-color": {
          "0%, 100%": { color: "inherit" },
          "50%": { color: "rgb(220 38 38)" }, // text-red-600
        },
      },
      animation: {
        "text-color": "text-color 2s infinite",
      },
    },
  },
  plugins: [],
};
