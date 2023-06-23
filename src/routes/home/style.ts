import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 100px;  
`;
export const GridContainer = styled.div`
    width: 100%;
    max-width:1040px;
    min-height: calc(100vh - 100px);
    margin: auto;
    display: grid;
    grid-gap:30px;
    grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
    justify-content: center;
    align-items: center;
    padding: 10px;
    

`;