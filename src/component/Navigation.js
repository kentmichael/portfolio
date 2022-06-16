import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Nav, Div, Button, Button1, Span } from "./styles/Navigation/Nav"
import { toggle } from "../features/theme/themeSlice"

const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Nav>
      <Div>
        <Button
          onClick={() => {
            navigate("portfolio")
          }}
        >
          KS.
        </Button>
        <Button1 onClick={() => dispatch(toggle())}>
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
