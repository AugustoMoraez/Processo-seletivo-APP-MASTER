import styled from "styled-components";



type prop = {
    toggle:"true"|"false"
}

export const Container = styled.div<prop>`
    //dimensoes e posição
    width: 30px;
    height: 30px;
    margin-top: 20px;
    margin-right: 30px;
    //hover
    &:hover{
        cursor:pointer;
    }
    //sub-components
    div{
        transition: 500ms;
        background-color:${prop => prop.toggle === "true" ? "#fff":"#061E37" } ;
    }
    div:first-child{
        transform: ${prop => prop.toggle === "true" ? "rotate(45deg)":"rotate(0deg)" };
    }
    div:last-child{
        margin-top: ${prop => prop.toggle === "true" ? "-9px":"0px" };
        transform: ${prop => prop.toggle === "true" ? "rotate(-45deg)":"rotate(0deg)" };
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
