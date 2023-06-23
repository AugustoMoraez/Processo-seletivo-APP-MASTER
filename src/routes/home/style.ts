import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 100px;  
`;
export const GridContainer = styled.div`
    
    //dimensao
    width: 100%;
    max-width:1040px;
    min-height: calc(100vh - 100px);
    margin: auto;
    padding: 10px;
    grid-gap:30px;
    //display
    grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
    display: grid;
    justify-content: center;
    align-items: center;
    

`;