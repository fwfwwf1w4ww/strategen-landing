/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepnavy: "#323053",
        darkgraygreen: "#505650",
        greenolive: "#677D3D",
        mustardgreen: "#97A036",
        brightlime: "#C0CF2E"
      }
    },
  },
  plugins: [],
}
