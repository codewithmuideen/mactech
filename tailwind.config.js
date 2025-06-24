/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#1a73e8',
        'brand-blue-dark': '#1765cc',
        'brand-dark': '#1f2937',
        'brand-gray-light': '#f9fafb',
        'brand-gray-text': '#4b5563',
        'brand-accent-teal': '#10b981',
        'brand-promo-blue': '#4f46e5', // <-- ADD THIS LINE (This is Tailwind's indigo-600)
      },
    },
  },
  plugins: [],
}
