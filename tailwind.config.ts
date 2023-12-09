/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",        
      },
    },
    extend: {
      backgroundImage: {
        "line-gradient": "linear-gradient(96deg, #F3FCFF -1.33%, #55CDFC 100%)",
        "vertical-gradient":
          "linear-gradient(180deg, #70D7FF 0%, #A3E4FD 31.35%, #D0F2FE 64.69%, #F3FCFF 100%)",
      },
      colors: {
        magenta: "#FF6382",
        skyblue: "#55CDFC",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
