import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 0%, 100%);
    --blue: hsl(246, 80%, 60%);
    --light-orange: hsl(15, 100%, 70%);
    --soft-blue: hsl(195, 74%, 62%);
    --light-red: hsl(348, 100%, 68%);
    --lime-green: hsl(145, 58%, 55%);
    --violet: hsl(264, 64%, 52%);
    --soft-yellow: hsl(43, 84%, 65%);

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

  span {
    &::selection {
      background-color: var(--theme-text);
      color: var(--theme-bg);
    }
  }

  ul li {
    &::selection {
      background-color: var(--theme-text);
      color: var(--theme-bg);
    }
  }

  a.active {
    opacity: 1;
  }

  #map {
    height: 100%;
  }
`

export default GlobalStyle
