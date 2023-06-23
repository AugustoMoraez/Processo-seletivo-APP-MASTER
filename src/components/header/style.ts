import { styled } from "styled-components";


export const Container = styled.div`
    //dimensão
    width: 100%;
    height:100px;    
    margin:auto;
    position: fixed;
    z-index: 98;
    //Display
    display:flex;
    justify-content: space-between;
    align-items: center;
    //style
    background-color: #0084FF;
    //sub-componentes
    a{
        margin: auto;
        font-size: 40px;
        font-weight: 600;
        color: #fff;
    } 

`;

