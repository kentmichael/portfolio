import styled from "styled-components"

export const Nav = styled.nav`
  margin-top: 0;
  margin-bottom: 5rem;
  padding: 0;
  background-color: var(--theme-element);
  box-shadow: 0 0.1rem 0.5rem hsla(0, 0%, 20%, 0.2);

  @media (min-width: 71.88em) {
    margin-bottom: 6rem;
  }
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

export const Button = styled.button`
  border: none;
  padding: 0;
  font-family: var(--font-primary);
  font-size: 2.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: var(--theme-element);
  color: var(--theme-text);
  cursor: pointer;

  @media (min-width: 71.88em) {
    font-size: 2.25rem;
  }
`

export const Button1 = styled(Button)`
  font-weight: 400;
  font-size: 1.12rem;

  @media (min-width: 71.88em) {
    font-size: 1rem;
  }
`

export const Span = styled.span`
  margin-right: 0.3rem;
`
