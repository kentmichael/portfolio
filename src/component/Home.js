import React, { useEffect } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import {
  Main,
  Section,
  Div,
  Image,
  Div1,
  H1,
  Span,
  Ul,
  StyledNavLink,
} from "./styles/Home/Home"
import PhotoIcon from "../asset/photo-of-me.jpg"

const links = [
  {
    title: "About Me",
    to: "about-me",
  },
  {
    title: "Projects",
    to: "projects",
  },
  {
    title: "Contact",
    to: "contact",
  },
]

const Home = () => {
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    switch (params?.child) {
      case "about-me":
        navigate("about-me")
        break
      case "projects":
        navigate("projects")
        break
      case "contact":
        navigate("contact")
        break
      default:
        break
    }
  }, [navigate, params])

  return (
    <Main>
      <Section>
        <Div>
          <Image src={PhotoIcon} alt="Profile Icon" />
          <Div1>
            <Span>Created by</Span>
            <H1>Kent Michael San</H1>
          </Div1>
        </Div>
        <Ul>
          {links.map((link, idx) => {
            return (
              <li key={idx}>
                <StyledNavLink to={link.to}>{link.title}</StyledNavLink>
              </li>
            )
          })}
        </Ul>
      </Section>
      <Outlet />
    </Main>
  )
}

export default Home
