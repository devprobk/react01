import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    margin: 2rem
  }

`;
