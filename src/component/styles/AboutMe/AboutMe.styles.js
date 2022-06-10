import styled from "styled-components"

export const Section = styled.section`
  max-width: 45rem;
  margin-inline: auto;
  border-radius: 1rem;
  padding-top: 2.38rem;
  background-color: var(--soft-yellow);

  @media (min-width: 71.88em) {
    max-width: none;
  }
`

export const Div = styled.div`
  display: grid;
  gap: 2rem;
  border-radius: 1rem;
  padding-block: 2rem;
  padding-inline: 1.75rem;
  background-color: var(--theme-element);
`

export const Div1 = styled.div`
  overflow: hidden;
`

export const Span = styled.span`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`

export const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.75rem;
  word-wrap: break-word;

  @media (min-width: 71.88em) {
    font-size: 7rem;
  }
`

export const Paragraph = styled.p``

export const HR = styled.hr`
  width: 100%;

  /* @media (min-width: 71.88em) {
    display: none;
  } */
`

export const Div2 = styled.div``

export const H3 = styled.h3`
  margin-bottom: 1rem;
  font-weight: 400;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

export const Span1 = styled.span`
  margin-right: 1rem;
  color: ${(props) => props.iconColor};
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-image: url(${(props) => props?.icon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
`
