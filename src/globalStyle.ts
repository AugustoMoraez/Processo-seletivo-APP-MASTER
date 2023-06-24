import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
}
body{
    background-color: #EDF6FC;
    color:#fefefe;
}
a,button,
input[type="email"],
input[type="submit"]{
    border: 0px;
    outline: none;
    text-decoration: none;
    transition: 0.5s;
}
ul{
    transition: 0.5s;
    font-family: 'Nunito';
    display: flex;
    list-style: none;
}

`;