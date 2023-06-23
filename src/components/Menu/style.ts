import styled from "styled-components";



export const IconMenu = styled.div`
    //dimensoes e posição
    width: 30px;
    height: 30px;
    margin-right: 30px;
    //hover
    &:hover{
        cursor:pointer;
    }
    //media
    @media (max-width:600px) {
        margin-right: 10px;
    }
    
`;
export const MenuBar = styled.div`
    //dimensoes e posicao
    width: 30px;
    height: 4px;
    margin-bottom: 5px;
    //style
    background-color: #061E37;
    border-radius: 10px;
    //media
    @media (max-width:400px) {
        width: 25px;
    }
`;
