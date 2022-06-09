import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./component/styles/Global/Global"
import Nav from "./component/Navigation"
import Home from "./component/Home"

const theme = {
  dark: {
    element: "hsl(235, 46%, 20%)",
    background: "hsl(226, 43%, 10%)",
    text: "hsl(0, 0%, 100%)",
  },
  light: {
    element: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 95%)",
    text: "hsl(226, 43%, 10%)",
  },
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle darkMode={darkMode} />
        <Nav mode={{ darkMode, setDarkMode }} />
        <Home />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
