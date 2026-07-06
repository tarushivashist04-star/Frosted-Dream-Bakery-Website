/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          orange: '#d97742',
          brown: '#8b5a2b',
          beige: '#f5f5dc',
          dark: '#1c1917',     // ston-900 equivalent
          darker: '#0c0a09',   // stone-950 equivalent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
