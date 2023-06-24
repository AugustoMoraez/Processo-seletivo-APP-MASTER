import styled from "styled-components";
import bg from "../../assets/images/bg2.jpg"

export const Container = styled.div`
    //dimensao
    width: 100%;
    height: 100vh;
    padding: 10px;
    //display
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //style
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    
`;

export const Fieldset = styled.fieldset`
    //dimensao
    width: 100%;
    max-width: 400px;
    height: 400px;
    //style
    border: 3px solid #55B5E4;
    transition: 0.7s;
    color: #55B5E4;
    border-radius: 20px;
    //sub-components
    legend{
        font-size: 60px;
        font-weight: 600;
        margin: auto;
        
    }
`;

export const Form = styled.div`
    //dimensao
    width: 100%;
    height: 250px;
    padding: 10px;
    //display
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //sub-componentes
    label{
        margin-right: auto;
        font-size: 22px;
        margin-top: auto;
    }
    input[type="email"] {
        //dimensao
        width: 100%;
        margin: 0px 10px;
        //style
        background: none;
        border: none;
        border-bottom: 1px solid #55B5E4;
        color: #fff;
        font-size: 17px;
    }
    input[type="email"]:valid {
        border-bottom: 2px solid #00ff00;
    }
    input[type="submit"] {
        //dimensão
        margin-top: auto;
        padding: 2px;
        width: 100%;
        //style
        border-radius: 5px;
        font-weight: 600;
        background-color: #55B5E4;
        color: #fff;
        cursor: pointer;
    }
    input[type="submit"]:hover{
        opacity: 0.7;
    }


`;