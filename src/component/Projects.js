import React from "react"
import restCountriesBg from "../asset/project-images/rest-countries-bg.png"
import rockPaperBg from "../asset/project-images/rock-paper-etc-bg.png"
import spaceTourismBg from "../asset/project-images/space-tourism-bg.png"
import {
  Div,
  Section,
  Div1,
  Div2,
  Div3,
  H2,
  Div4,
  Anchor,
  Paragraph,
  H3,
  Ul,
  Li,
} from "./styles/Projects/Projects"

const projectData = [
  {
    title: "REST Countries API",
    description:
      "Integrate the REST Countries API to pull country data and display all countries, provides search and filter functionality, see more detailed information on a separate page and a theme switcher.",
    liveSiteUrl: "https://kentmichael.github.io/rest-countries-api/",
    sourceCode: "https://github.com/kentmichael/rest-countries-api",
    screenshot: restCountriesBg,
    techStack: [
      {
        name: "html5",
        color: "#FF760D",
      },
      {
        name: "css3-alt",
        color: "#008AD8",
      },
      {
        name: "js-square",
        color: "#FEDD00",
      },
      {
        name: "react",
        color: "#05C3DD",
      },
    ],
    bgColor: "--blue",
  },
  {
    title: "Rock, Paper, Scissors, Lizard, Spock",
    description:
      "Play Rock, Paper, Scissors, Lizard, Spock against the computer.",
    liveSiteUrl:
      "https://kentmichael.github.io/rock-paper-scissors-lizard-spock/",
    sourceCode:
      "https://github.com/kentmichael/rock-paper-scissors-lizard-spock",
    screenshot: rockPaperBg,
    techStack: [
      {
        name: "html5",
        color: "#FF760D",
      },
      {
        name: "css3-alt",
        color: "#008AD8",
      },
      {
        name: "js-square",
        color: "#FEDD00",
      },
      {
        name: "sass",
        color: "#D62598",
      },
    ],
    bgColor: "--light-orange",
  },
  {
    title: "Space Tourism Website",
    description:
      "A multi-page space tourism website if you want to go to space!",
    liveSiteUrl: "https://kentmichael.github.io/space-tourism-website/",
    sourceCode: "https://github.com/kentmichael/space-tourism-website",
    screenshot: spaceTourismBg,
    techStack: [
      {
        name: "html5",
        color: "#FF760D",
      },
      {
        name: "css3-alt",
        color: "#008AD8",
      },
      {
        name: "js-square",
        color: "#FEDD00",
      },
      {
        name: "react",
        color: "#05C3DD",
      },
    ],
    bgColor: "--soft-blue",
  },
  {
    title: "Project4",
    description: "Lorem",
    liveSiteUrl: "Url1",
    sourceCode: "",
    screenshot: "",
    techStack: [
      {
        name: "html5",
        color: "#FF760D",
      },
    ],
    bgColor: "--light-red",
  },
  {
    title: "Project5",
    description: "Lorem",
    liveSiteUrl: "Url1",
    sourceCode: "",
    screenshot: "",
    techStack: [
      {
        name: "html5",
        color: "#FF760D",
      },
    ],
    bgColor: "--violet",
  },
  {
    title: "Project6",
    description: "Lorem",
    liveSiteUrl: "Url1",
    sourceCode: "",
    screenshot: "",
    techStack: [
      {
        name: "html5",
        color: "#FF760D",
      },
    ],
    bgColor: "--soft-yellow",
  },
]

const Projects = () => {
  return (
    <Div>
      {projectData.map((project, idx) => {
        const {
          title,
          description,
          liveSiteUrl,
          sourceCode,
          screenshot,
          techStack,
          bgColor,
        } = project

        return (
          <Section bgColor={bgColor} key={idx}>
            <a href={liveSiteUrl} target="_blank" rel="noreferrer">
              <Div1 bg={screenshot} title="Visit Website"></Div1>
            </a>
            <Div2>
              <Div3>
                <H2>{title}</H2>
                <Div4>
                  <Anchor
                    href={liveSiteUrl}
                    title="Live Site URL"
                    target="_blank"
                    className="fa-solid fa-link"
                  ></Anchor>
                  <Anchor
                    href={sourceCode}
                    title="View Source Code"
                    target="_blank"
                    className="fa-solid fa-arrow-up-right-from-square"
                  ></Anchor>
                </Div4>
              </Div3>
              <Paragraph>{description}</Paragraph>
              <H3>Built using:</H3>
              <Ul>
                {techStack.map((stack, idx) => {
                  return (
                    <Li
                      className={`fa-brands fa-${stack.name}`}
                      iconColor={stack.color}
                      key={idx}
                    ></Li>
                  )
                })}
              </Ul>
            </Div2>
          </Section>
        )
      })}
    </Div>
  )
}

export default Projects
