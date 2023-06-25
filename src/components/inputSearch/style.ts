import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    height: 30px;
    padding: 7px;
    margin: auto;
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
`;
export const Input = styled.input`
    width: 100%;
    background: none;
    border: none;
    outline:none;
    padding: 3px;
    border-bottom:1px solid #333;
    
    
`;
export const InputButton = styled.button`
    width: 27px;;
    height: 27px;
    background: none;
    cursor: pointer;
    border-bottom:1px solid #333;
    svg{
        width: 27px;
        color:#007BFF;
    }
    
    
`;