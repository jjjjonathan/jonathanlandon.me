import { createGlobalStyle } from 'styled-components';
import '@picocss/pico/css/pico.min.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: "Roboto Flex", sans-serif;
    --font-weight: 400;
  }

  @supports (font-variation-settings: normal) {
  :root {
    --font-family: "Roboto FlexVariable";
    font-variation-settings: "wdth" 100, "wght" 400, "opsz" 144;
  }
}
`;

export default GlobalStyle;
