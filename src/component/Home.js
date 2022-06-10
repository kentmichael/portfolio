import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
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

const Home = () => {
  const [active, setActive] = useState("")

  useEffect(() => {
    if (!document.querySelector(".active")) setActive("about-me")
  }, [])

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
                  className={active === link.to ? "active" : null}
                  onClick={() => setActive(link.to)}
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
