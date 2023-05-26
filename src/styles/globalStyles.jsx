import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  button, input, textarea {
    border: 0;
    list-style: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;

    background: none;

    outline: 0;
  }

  :root {
    --color-primary: #F09035;
    --color-secondary: #FFA000;
    --color-terciary: #FFFFFF;
    --color-background-white: #F8F8F8;
    
    --color-text: #4E4E4E;
    --color-text-white: #FFFFFF;
    --color-text-red: #BC2E31;

    --color-border-input: #FEBC10;
    
  }

  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #e3dddd;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #FFA000;
    border-radius: 20px;
  }
`;
