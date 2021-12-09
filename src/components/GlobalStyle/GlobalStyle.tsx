import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family-primary: "Lato", sans-serif;
    --spacing-main: 4vw;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-big: 32px;
    --spacing-huge: 48px;
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
