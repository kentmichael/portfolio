import styled, { keyframes } from "styled-components"

export const Div = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 45rem;
  width: 100%;
  margin-inline: auto;

  @media (min-width: 71.88em) {
    max-width: none;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

export const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  overflow: hidden;
  border-radius: 1rem;
  padding-top: 2.38rem;
  background-color: var(${(props) => props.bgColor});

  @media (min-width: 71.88em) {
    padding-top: 2.88rem;
  }
`

const bgTransition = keyframes`
  0% {
    background-size: 120%;
  }
  100% {
    background-size: 130%;
  }
`

export const Div1 = styled.div`
  position: relative;
  height: 12.75rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: var(--theme-element);
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;

  @media (min-width: 40em) {
    height: 15.75rem;
  }

  &:hover {
    animation-name: ${bgTransition};
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-delay: 100ms;
    animation-fill-mode: forwards;

    @media (min-width: 40em) {
      animation-duration: 500ms;
    }

    &::before {
      opacity: 0.8;
    }

    &::after {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: var(--black);
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  &::after {
    content: "CLICK ME";
    position: absolute;
    display: block;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 500;
    font-size: 1.75rem;
    letter-spacing: 0.5rem;
    text-align: center;
    color: var(--white);
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
`

export const Div2 = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  padding-block: 2rem;
  padding-inline: 1.75rem;
  background-color: var(--theme-element);

  @media (min-width: 71.88em) {
    padding-inline: 2rem;
  }
`

export const Div3 = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 71.88em) {
    margin-bottom: 1.5rem;
  }
`

export const H2 = styled.h2`
  font-size: 1.13rem;
  font-weight: 400;

  @media (min-width: 71.88em) {
    font-size: 1.2rem;
  }
`

export const Div4 = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`

export const Anchor = styled.a`
  color: var(--theme-text);
  opacity: 0.5;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const Paragraph = styled.p`
  flex: 1 1 auto;
  margin-bottom: 1rem;
  text-align: justify;

  @media (min-width: 71.88em) {
    margin-bottom: 1.5rem;
  }
`

export const H3 = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
`

export const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  list-style-type: none;
  margin: 0;
  border: none;
  padding: 0;

  @media (min-width: 71.88em) {
    gap: 1rem;
  }
`

export const Li = styled.li`
  font-size: 1.5rem;
  color: ${(props) => props.iconColor};

  @media (min-width: 71.88em) {
    font-size: 1.75rem;
  }
`
