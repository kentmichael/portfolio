import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Main = styled.main`
  display: grid;
  gap: 1.5rem;
  max-width: 80rem;
  margin-bottom: 5rem;
  margin-inline: 1.56rem;

  @media (min-width: 40em) {
    margin-inline: 3.56rem;
  }

  @media (min-width: 71.88em) {
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
    align-items: start;
  }

  @media (min-width: 87.5em) {
    margin-inline: auto;
  }
`

export const Section = styled.section`
  max-width: 45rem;
  width: 100%;
  margin-inline: auto;
  border-radius: 1rem;
  background-color: var(--theme-element);

  @media (min-width: 71.88em) {
    position: sticky;
    top: 2rem;
  }
`

export const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin: 0;
  padding-block: 2rem;
  padding-inline: 1.75rem;
  border-radius: 1rem;
  background-color: var(--lime-green);

  @media (min-width: 71.88em) {
    gap: 2.5rem;
  }
`

export const Image = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin: 0;
  padding: 0;
  border: 0.19rem solid var(--white);
  border-radius: 50%;

  @media (min-width: 71.88em) {
    width: 5.44rem;
    height: 5.44rem;
  }
`

export const Div1 = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.75rem;
  justify-content: center;
`

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--theme-text);

  @media (min-width: 71.88em) {
    font-size: 3rem;
  }
`

export const Span = styled.span`
  font-size: 0.81rem;
  color: var(--theme-text);
  opacity: 0.8;

  @media (min-width: 71.88em) {
    font-size: 1.3rem;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding-block: 1.69rem;
  padding-inline: 1.75rem;

  @media (min-width: 71.88em) {
    flex-flow: column wrap;
    gap: 1.63rem;
  }
`

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 1rem;
  color: var(--theme-text);
  opacity: 0.3;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 71.88em) {
    font-size: 1.5rem;
  }
`
