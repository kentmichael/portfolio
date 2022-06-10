import React from "react"
import {
  Section,
  Div,
  Div1,
  Span,
  H2,
  Paragraph,
  HR,
  Div2,
  H3,
  Ul,
  Span1,
} from "./styles/AboutMe/AboutMe"
import StyledComponentIcon from "../asset/stack-icons/styled-components.png"
import ReduxIcon from "../asset/stack-icons/redux.svg"
import ReactRouterIcon from "../asset/stack-icons/react-router.png"

const techStack = [
  {
    title: "HTML5 (HyperText Markup Language)",
    name: "html5",
    color: "#FF760D",
  },
  {
    title: "CSS3 (Cascading StyleSheet)",
    name: "css3-alt",
    color: "#008AD8",
  },
  {
    title: "JavaScript",
    name: "js-square",
    color: "#FEDD00",
  },
  {
    title: "SASS (Syntactically Awesome StyleSheet)",
    name: "sass",
    color: "#D62598",
  },
  {
    title: "React JS",
    name: "react",
    color: "#05C3DD",
  },
  {
    title: "Styled Components",
    icon: StyledComponentIcon,
  },
  {
    title: "Redux",
    icon: ReduxIcon,
  },
  {
    title: "React-Router",
    icon: ReactRouterIcon,
  },
]

const AboutMe = () => {
  return (
    <Section>
      <Div>
        <Div1>
          <Span>Aspiring</Span>
          <H2>Front-End Developer</H2>
          <Paragraph>Currently exploring the React Ecosystem.</Paragraph>
        </Div1>
        <HR />
        <Div2>
          <H3>Technology Stack</H3>
          <Ul>
            {techStack.map((stack, idx) => {
              return (
                <li key={idx}>
                  <Span1
                    className={`fa-brands fa-${stack?.name}`}
                    iconColor={stack?.color}
                    icon={stack?.icon}
                  ></Span1>
                  {stack.title}
                </li>
              )
            })}
          </Ul>
        </Div2>
      </Div>
    </Section>
  )
}

export default AboutMe
