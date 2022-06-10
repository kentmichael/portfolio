import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Routes, Route } from "react-router-dom"
import GlobalStyle from "./component/styles/Global/Global"
import Nav from "./component/Navigation"
import Home from "./component/Home"
import NoMatch from "./component/NoMatch"
import Projects from "./component/Projects"

const theme = {
  dark: {
    element: "hsl(235, 46%, 20%)",
    background: "hsl(226, 43%, 10%)",
    text: "hsl(0, 0%, 100%)",
  },
  light: {
    element: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 80%)",
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
        <Routes>
          <Route path="portfolio" element={<Home />}>
            <Route index element={<Projects />} />
            <Route path="about-me" element={<NoMatch />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<NoMatch />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
