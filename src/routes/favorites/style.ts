import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 100px;  
    color:#333;
`;
export const SearchOptions = styled.div`
    width: 100%;
    max-width:1240px;
    height: 80px;
    padding: 10px;
    margin: auto;
    display: flex;
    
    justify-content: space-between;
    align-items:center;
    @media (max-width:670px) {
        flex-direction: column-reverse;
        margin-top: 20px;
        justify-content: center;
    }


`;
export const GenreOptions = styled.select`
    outline: none;
    padding: 0px 5px;
    width: 100%;
    max-width: 150px;
    cursor: pointer;
    background-color: #0084FF;
    color: #fff;
    text-transform: capitalize;
    border: none;
    option{
        color: #0084FF;
        background-color: #fff;
    }
   

`;





export const InputContainer = styled.div`
    width: 100%;
    max-width: 500px;
    height: 30px;
    padding: 7px;
    margin-left: auto;
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:670px) {
         margin: auto;
    }
    
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
export const VoidList = styled.p`
    color:rgba(0,0,0,0.1);
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    margin-top: 20vh;
    position: absolute;
    left:50%;
    transform: translate(-50%);
    cursor: default;

`;
