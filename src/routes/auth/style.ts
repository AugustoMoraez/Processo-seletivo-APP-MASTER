import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 10px;
    padding-top: 100px;
    @media (max-height:708px) {
        padding: 0px;
        padding-top: 100px;
        
    }
`
export const Form = styled.div`
    width: 100%;
    max-width:450px;
    height: 500px;
    margin: auto;
   
    background-color: #fff;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-top: 6px solid #0084FF;
    box-shadow: 2px 2px 20px #333;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    @media (max-height:708px) {
        max-width:100vw;
        height: calc(100vh - 100px);
        border-radius: 0;
        
    }
`;

export const FormOptions = styled.div`
    width: 100%;
    height: 50px;
    margin-top: -2px;
    display: flex;
    
`;

type optionForm = {
    selected:"SingIn"|"LogIn"
}

export const SingIn = styled.div<optionForm>`
    flex: 1;
    transition: 0.2s;
    color: ${props => props.selected === "SingIn" ? "#333" : "#fff" };
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    background-color: ${props => props.selected === "SingIn" ? '#fff' : "#0084FF" };
    cursor: pointer;
   
    
`;
export const LogIn = styled.div<optionForm>`
    flex: 1;
    background-color: ${props => props.selected === "LogIn" ? "#fff" : "#0084FF" };
    transition: 0.2s;
    color: ${props => props.selected === "LogIn" ? "#333" : "#fff" };
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
     
`;