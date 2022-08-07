import * as styled from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  :root {
    /* CSS Variables */

    --white: #f0f4ef;
    --black: #000000;

    /* ************* */

    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    /* spacing: 1.5rem; */
  }

  html {
    font-size: 87.5%; /* 14px */
  }

  body {
    background: var(--white);
    color: var(--black);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    line-height: 1.75;
  }

  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 7.594rem;
  }

  h2 {
    font-size: 5.063rem;
  }

  h3 {
    font-size: 3.375rem;
  }

  h4 {
    font-size: 2.25rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  small,
  .text_small {
    font-size: 0.667rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
  }
`;

export default GlobalStyle;
