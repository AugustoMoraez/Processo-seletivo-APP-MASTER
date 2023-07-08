import styled from "styled-components";

export const GridContainer = styled.div`
    
    //dimensao
    width: 100%;
    max-width:1240px;
    margin: auto;
    padding: 5px;
    padding-top: 50px;
    
    //display
    display: grid;
    margin: 0px auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    gap: 3rem;

 

`;