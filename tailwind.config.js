/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'pulse-1': 'pulse 2s ease-in-out infinite',
        'pulse-2': 'pulse 2s ease-in-out infinite 1s',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

