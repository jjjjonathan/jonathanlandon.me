import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: "Open Sans", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    --font-family: "Raleway", sans-serif;
    --font-weight: 800;
  }

  h1 {
    --font-size: 2.5rem;
    --typography-spacing-vertical: 2.5rem;
  }

  h2 {
    --font-size: 2rem;
    --typography-spacing-vertical: 2rem;
  }

  h3 {
    --font-size: 1.75rem;
    --typography-spacing-vertical: 1.75rem;
  }

  h4 {
    --font-size: 1.5rem;
    --typography-spacing-vertical: 1.5rem;
  }

  h5 {
    --font-size: 1.25rem;
    --typography-spacing-vertical: 1.25rem;
  }

  button,
  input[type=submit],
  input[type=reset],
  input[type=button],
  a[role=button] {
    --font-weight: 600;
  }
`;

export default GlobalStyle;
