import { createGlobalStyle } from 'styled-components';
import '@picocss/pico/css/pico.min.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: "Plus Jakarta Sans", sans-serif;
    --font-weight: 400;
    --font-size: 16px;
    --spacing: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    --font-weight: 800;
  }
`;

export default GlobalStyle;
