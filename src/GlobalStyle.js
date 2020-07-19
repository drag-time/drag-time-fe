import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  #root {
    width: 100%;
    height: 100%;
  }
  body {
    background-color: white;
    width: 100%;
    height: 100%;
  }
`;