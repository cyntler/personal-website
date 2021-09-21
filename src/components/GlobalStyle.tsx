import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    font-family: "Lato", sans-serif;
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
