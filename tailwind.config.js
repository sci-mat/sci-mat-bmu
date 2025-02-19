/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
        black:"#050505",
        text:"#e0e0e0",
        blue:"#00a1ff",
        purple:"#b967ff",
        
      },
      fontFamily: {
       body:["Orbitron"]
      },
      backgroundImage: {
        'shiny-progress': 'linear-gradient(to right, rgba(0, 161, 255, 0.2), #00a1ff, rgba(125, 249, 255))',
      },
  },
},
  plugins: [],
}