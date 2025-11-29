/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up-1': 'fade-in-up 0.5s ease-out forwards 100ms',
        'fade-in-up-2': 'fade-in-up 0.5s ease-out forwards 200ms',
        'fade-in-up-3': 'fade-in-up 0.5s ease-out forwards 300ms',
      },
    },
  },
  plugins: [],
  safelist: [
    'delay-0',
    'delay-100',
    'delay-200',
    'animate-fade-in-up-1',
    'animate-fade-in-up-2',
    'animate-fade-in-up-3',
  ]
}