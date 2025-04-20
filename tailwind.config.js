/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ceramic': '#F5F5F5',
        'sage': '#9CAF88',
        'clay': '#8B4513',
        'terracotta': '#E2725B',
        'terracotta-dark': '#C25B45',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      }
    },
  },
  plugins: [],
} 