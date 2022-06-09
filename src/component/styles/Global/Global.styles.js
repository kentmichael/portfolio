import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 0%, 100%);

    --theme-bg: ${(props) =>
      props.darkMode
        ? props.theme.dark.background
        : props.theme.light.background};
    --theme-text: ${(props) =>
      props.darkMode ? props.theme.dark.text : props.theme.light.text};
    --theme-element: ${(props) =>
      props.darkMode ? props.theme.dark.element : props.theme.light.element};

    --font-primary: 'Rubik', sans-serif;   
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--theme-bg);
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 300;
    color: var(--theme-text);
  }

  h1,
  h2,
  h3 {
    line-height: 1.3;
    margin: 0;

    &::selection {
      background-color: var(--theme-text);
      color: var(--theme-bg);
    }
  }

  p {
    margin: 0;

    &::selection {
      background-color: var(--theme-text);
      color: var(--theme-bg);
    }
  }

  a:link,
  a:visited,
  a:active {
    text-decoration: none;

    &::selection {
      background-color: var(--theme-text);
      color: var(--theme-bg);
    }
  }
`

export default GlobalStyle
