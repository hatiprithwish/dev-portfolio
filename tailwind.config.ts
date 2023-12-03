import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "skyblue-gradient":
          "linear-gradient(96deg, #F3FCFF -1.33%, #55CDFC 100%)",
      },
      colors: {
        magenta: "#FF6382",
        skyblue: "#55CDFC",
      },
    },
  },
  plugins: [],
};
export default config;
