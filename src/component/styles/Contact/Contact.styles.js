import styled from "styled-components"

export const Section = styled.section`
  max-width: 45rem;
  width: 100%;
  margin-inline: auto;
  border-radius: 1rem;
  padding-top: 2.38rem;
  background-color: var(--theme-element);

  @media (min-width: 71.88em) {
    max-width: 75rem;
  }
`

export const Div = styled.div`
  border-radius: 1rem;
  border-top: 0.06rem solid var(--theme-bg);
  padding-block: 2rem;
  padding-inline: 1.75rem;
  background-color: var(--theme-element);
`

export const Div1 = styled.div`
  margin-bottom: 2rem;
`

export const H2 = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  @media (min-width: 71.88em) {
    font-size: 3rem;
    letter-spacing: 1rem;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

export const Anchor = styled.a`
  font-weight: 400;
  color: var(--theme-text);
  opacity: 0.5;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const Div2 = styled.div`
  height: 23.38rem;
`

export const Span = styled.span`
  margin-right: 1rem;
  font-size: 1.25rem;
  color: ${(props) => props.iconColor};

  @media (min-width: 71.88em) {
    font-size: 1.5rem;
  }
`
