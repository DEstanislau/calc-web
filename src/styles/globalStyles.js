import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    background: #ececec;



    @media(max-width: 1400px){
      overflow: visible;
    }
  }

  body{
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: 14px 'Roboto Slab', serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

`;
