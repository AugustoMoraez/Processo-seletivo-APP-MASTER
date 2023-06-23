import styled from "styled-components";

export const GridContainer = styled.div`
    
    //dimensao
    width: 100%;
    max-width:1140px;
    min-height: calc(100vh - 100px);
    margin: auto;
    padding: 5px;
    padding-top: 50px;
    grid-gap:10px;
    //display
    grid-template-columns: repeat(auto-fit,300px);
    display: grid;
    justify-content: center;
    align-items: left;
    

`;