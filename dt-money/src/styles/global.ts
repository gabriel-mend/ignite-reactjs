import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    // REM = 1rem == 16px
  }

  body {
    //background-color: 
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
  
  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`