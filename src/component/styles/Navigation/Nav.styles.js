import styled from "styled-components"

export const Nav = styled.nav`
  margin-top: 0;
  margin-bottom: 3.13rem;
  padding: 0;
  background-color: var(--theme-element);
  box-shadow: 0 0.1rem 0.5rem hsla(0, 0%, 20%, 0.2);
`

export const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
  margin-inline: 1.56rem;
  padding-block: 2.56rem;

  @media (min-width: 40em) {
    margin-inline: 3.56rem;
  }

  @media (min-width: 71.88em) {
    padding-block: 1.56rem;
  }

  @media (min-width: 87.5em) {
    margin-inline: auto;
  }
`

export const Anchor = styled.a`
  font-size: 2.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--theme-text);

  @media (min-width: 71.88em) {
    font-size: 2.25rem;
  }
`

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: var(--theme-element);
  font-family: var(--font-primary);
  font-size: 1.12rem;
  color: var(--theme-text);
  cursor: pointer;

  @media (min-width: 71.88em) {
    font-size: 1rem;
  }
`

export const Span = styled.span`
  margin-right: 0.3rem;
`
