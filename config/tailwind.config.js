/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      sans: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    extend: {
      width: theme => ({
        160: "40rem"
      }),
      colors: {
        primary: {
          default: "#575E75",
          "050": "#EDEEF1",
          "100": "#FFFFFF",
          "200": "#D3D6DE",
          "300": "#A7ADBE",
          "400": "#7B849D",
          "500": "#575E75",
          "600": "#414758",
          "700": "#2B2F3B",
          "800": "#16181D",
          "900": "#000000"
        },
        yellow: {
          default: "#797453",
          "050": "#f6f6f2",
          "100": "#e0dfd3",
          "200": "#C1BDA4",
          "300": "#ACA786",
          "400": "#989167",
          "500": "#797453",
          "600": "#5B573E",
          "700": "#3D3A29",
          "800": "#1E1D15",
          "900": "#000000"
        }
      }
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  variants: {}
};
