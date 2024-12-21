/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:"var(--black)",
        cyan:"var(--cyan)",
        text:"var(--text)",
      }
    },
  },
  plugins: [],
}

