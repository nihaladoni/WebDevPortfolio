import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    bgColor: "#e7e7e7",
    textColor: "#282828",
    highLightRed: "#FF4C60",
    labelColor: "#e2eaed",
  },
  fontSizes: {
    smaller: "1rem",
    small: "1.2rem",
    medium: "2rem",
    large: "3rem",
  },
}

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
