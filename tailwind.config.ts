/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "Seashell":{
          "50":"#FFFFFF",
          "100":"#FEFDFA",
          "200":"#FEFBF6",
          "300":"#FEFBF6",
          "400":"#FDFAF1",
          "500":"#FDF8ED",
          "600":"#F3D695",
          "700":"#EAB33E",
          "800":"#AE7D13",
          "900":"#573F0A",
          "950":"#2E2105"},
        "Periwinkle":{
          "50":"#F8FAFB",
          "100":"#F2F5F8",
          "200":"#E5ECF1",
          "300":"#D4E0E7",
          "400":"#C7D7E0",
          "500":"#BACDD9",
          "600":"#85A7BC",
          "700":"#55809B",
          "800":"#3A5769",
          "900":"#1D2C35",
          "950":"#0E161A"},
        "Elred":{"50":"#FEEAE6",
          "100":"#FED6CD",
          "200":"#FDA996",
          "300":"#FC8064",
          "400":"#FB5732",
          "500":"#F23005",
          "600":"#C32704",
          "700":"#911D03",
          "800":"#5F1302",
          "900":"#320A01",
          "950":"#190501"},
        "Prussian":{
          "50":"#D7E8FE",
          "100":"#AFD1FD",
          "200":"#5AA0FB",
          "300":"#0B72FA",
          "400":"#044CAA",
          "500":"#022859",
          "600":"#021F46",
          "700":"#011837",
          "800":"#011023",
          "900":"#000914",
          "950":"#00040A"}
      },
    },
  },
  // plugins: [ require("daisyui")],
  // daisyui: {
  //   themes: ["business"],

  // },
};