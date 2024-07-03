/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "dana-medium" :"danaMedium",
        "dana-bold" : "danaBold",
        "dana-black" : "danaBlack",
      },
      colors:{
        "primary": "#086AD8",
        "secondary" : "#212121",
        "success" : "#F6F6FE",
        "textColor" : "#666666",
      }
    },
    container:{
      "center" : true,
    },
    screens:{
      'sm': '576px',

      'md': '768px',

      'lg': '992px',

      'xl': '1220px',
    }
  },
  plugins: [],
}

