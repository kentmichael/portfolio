import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Routes, Route } from "react-router-dom"
import GlobalStyle from "./component/styles/Global/Global"
import Nav from "./component/Navigation"
import Home from "./component/Home"
import NoMatch from "./component/NoMatch"
import Projects from "./component/Projects"
import AboutMe from "./component/AboutMe"
import Contact from "./component/Contact"

const theme = {
  dark: {
    element: "hsl(0, 0%, 10%)",
    background: "hsl(0, 0%, 0%)",
    text: "hsl(0, 0%, 100%)",
  },
  light: {
    element: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 80%)",
    text: "hsl(0, 0%, 0%)",
  },
}

const mode = JSON.parse(localStorage.getItem("KSPortfolioV1"))
const initialState = mode ? mode?.darkMode : false

function App() {
  const [darkMode, setDarkMode] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("KSPortfolioV1", JSON.stringify({ darkMode }))
  }, [darkMode])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle darkMode={darkMode} />
        <Nav mode={{ darkMode, setDarkMode }} />
        <Routes>
          <Route path="portfolio" element={<Home />}>
            <Route index element={<AboutMe />} />
            <Route path="about-me" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
