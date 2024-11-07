/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}", // Adjust paths as necessary
    "./components/**/*.{astro,js,ts,jsx,tsx}",
    "./layouts/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

