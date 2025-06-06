/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'], // Replace with your font
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}