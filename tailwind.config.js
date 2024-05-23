/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif'], // Add the Kumbh Sans font family
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}