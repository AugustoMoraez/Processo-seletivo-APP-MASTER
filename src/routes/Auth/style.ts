import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

export const Fieldset = styled.fieldset`
    
    transition: 0.7s;
    width: 100%;
    max-width: 400px;
    height: 400px;
    border: 3px solid #0084FF;
    color: #0084FF;
    border-radius: 20px;
    legend{
        font-size: 60px;
        font-weight: 600;
        margin: auto;
        
    }
`;

export const Form = styled.div`
    width: 100%;
    height: 250px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    label{
        margin-right: auto;
        font-size: 22px;
        margin-top: auto;
    }
    input[type="email"] {
        background: none;
        border: none;
        border-bottom: 1px solid #0084FF;
        width: 100%;
        margin: 0px 10px;
        
        color: #fff;
        font-size: 17px;
    }
    input[type="email"]:valid {
        border-bottom: 2px solid #00ff00;
    }
    input[type="submit"] {
        margin-top: auto;
        border-radius: 5px;
        padding: 2px;
        font-weight: 600;
        width: 100%;
        background-color: #0084FF;
        color: #fff;
        cursor: pointer;
    }
    input[type="submit"]:hover{
        background-color: #fff;
        color: #0084FF;
    }


`;