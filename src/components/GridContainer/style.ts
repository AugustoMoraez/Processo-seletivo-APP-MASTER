import styled from "styled-components";

export const GridContainer = styled.div`
    
    //dimensao
    width: 100%;
    max-width:1440px;
    min-height: calc(100vh - 100px);
    margin: auto;
    padding: 5px;
    padding-top: 50px;
    
    //display
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
    

`;