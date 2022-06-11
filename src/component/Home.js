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
    active: true,
  },
  {
    title: "Projects",
    to: "projects",
    active: false,
  },
  {
    title: "Contact",
    to: "contact",
    active: false,
  },
]

const Home = (props) => {
  const { activeLink, setActiveLink } = props.link
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!document.querySelector(".active")) setActiveLink("about-me")
  })

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
                <StyledNavLink
                  to={link.to}
                  className={activeLink === link.to ? "active" : null}
                  onClick={() => setActiveLink(link.to)}
                >
                  {link.title}
                </StyledNavLink>
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
