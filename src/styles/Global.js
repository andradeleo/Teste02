import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Sora", sans-serif;
    font-size: 16px;
    }

  body {
    min-height: 100vh;
    width: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
    outline: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;