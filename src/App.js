import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
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

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode)

  useEffect(() => {
    localStorage.setItem("KSPortfolioV1", JSON.stringify({ darkMode }))
  }, [darkMode])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle darkMode={darkMode} />
        <Nav />
        <Routes>
          <Route path="portfolio" element={<Home />}>
            <Route path=":child" element={<NoMatch />} />
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
