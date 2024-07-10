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
      fontSize:{
        "md": "2rem"
      },
      colors:{
        "primary": "#086AD8",
        "primary-100":"#0EC3E4",
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
    },
    animation:{
      fadeInDownBig: "fadeInDownBig 0.4s ease-in-out "
    },
    keyframes:{
      fadeInDownBig:{
        "0%":{transform:" translate3d(0, -100%, 0)"},
        "100":{transform: "none"}
      }
    }
  },
  plugins: [],
}

