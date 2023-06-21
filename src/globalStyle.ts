import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
}
body{
    background-color: #061E37;
    color:#fefefe;
}
a,button{
    border: 0px;
    outline: none;
    text-decoration: none;
    transition: 0.5s;
}

`;