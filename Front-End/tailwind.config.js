import { theme } from "flowbite-react";

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
      colors: {
        secondary: "#15803d",
        primary: "#2563eb",
        text: "#bcbfc5",
        header: "#111928",
        background: "#0d9488",
        textDark: "#FFFFFF",
        primaryDark: "#121212",
        secondaryDark: "#151B23",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwindcss-animate")],
};
