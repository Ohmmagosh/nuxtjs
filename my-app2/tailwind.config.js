/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
    },
    extend: {
      backgroundImage: {
        boxShadow: {
          '3xl': '0 35px 60px -15px rgba(255, 255, 255, 1)',
        }
      }
    },
  },
  plugins: [],
}
