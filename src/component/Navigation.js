import React from "react"
import { useNavigate } from "react-router-dom"
import { Nav, Div, Button, Button1, Span } from "./styles/Navigation/Nav"

const Header = (props) => {
  const { darkMode, setDarkMode } = props.mode
  const navigate = useNavigate()

  return (
    <Nav>
      <Div>
        <Button
          onClick={() => {
            props.setActiveLink("about-me")
            navigate("portfolio")
          }}
        >
          KS.
        </Button>
        <Button1 onClick={() => setDarkMode(!darkMode)}>
          <Span
            className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
          ></Span>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button1>
      </Div>
    </Nav>
  )
}

export default Header
