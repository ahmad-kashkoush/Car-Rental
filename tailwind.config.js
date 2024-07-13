/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
      'mono': ['Poppins']
    },

    extend: {
      colors: {
        'bg-primary': '#ffffff',
        'bg-secondary': '#f8f8f8',
        'accent': '#ff4d30',
        'title': '#010103',
        'normal-text': '#706f7b',
        'black-btn': '#161616',
        'ham': "#161616",
        "gray-input":"#ececec"
      }




    },
  },
  plugins: [],
}