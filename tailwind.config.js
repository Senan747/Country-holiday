/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../src/assets/background.jpg')",
      },
      container: {
        center: true,
        screens: {
          lg: '1140px',
          xl: '1140px',
          '2xl': '1140px'
        }
      },
    },
  },
  plugins: [],
}

