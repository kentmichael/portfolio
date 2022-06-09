import React from "react"
import { Nav, Div, Anchor, Button, Span } from "./styles/Navigation/Nav"

const Header = (props) => {
  const { darkMode, setDarkMode } = props.mode

  return (
    <Nav>
      <Div>
        <Anchor href="/">KMES.</Anchor>
        <Button onClick={() => setDarkMode(!darkMode)}>
          <Span
            className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
          ></Span>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Div>
    </Nav>
  )
}

export default Header
