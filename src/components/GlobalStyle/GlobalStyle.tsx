import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family-primary: "Lato", sans-serif;
    --spacing-main: 4vw;
  }

  * {
    box-sizing: border-box;
    --webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: var(--font-family-primary);
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
  }
`;
