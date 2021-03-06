import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  html,
  body {
    box-sizing: border-box;
    font-size: 18px;
    

  @media (max-width: 12G00px) {
    padding-right: 1.8vw;
  }
}
`;

export default GlobalStyles;
