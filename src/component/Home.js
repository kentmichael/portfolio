import React from "react"
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

const Home = () => {
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
          <li>
            <StyledNavLink to="about-me">About Me</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="projects">Projects</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="contact">Contact</StyledNavLink>
          </li>
        </Ul>
      </Section>
      <Outlet />
    </Main>
  )
}

export default Home
