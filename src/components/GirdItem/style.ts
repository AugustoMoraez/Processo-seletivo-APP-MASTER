import styled from "styled-components";




export const Container = styled.div`
    width: 100%;
    max-width:300px;
    height: 200px;
    margin: auto;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    *{
        transition: 0.5s;
    }   
    &:hover{
        div{
            opacity: 1;
        }
        img{
            scale: 1.1;
        }
    }

`;
export const Filter = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.5);
    width: 300px;
    z-index: 2;
    opacity: 0;  
`;
export const Thumbnail = styled.img`
    position: absolute;
    height: 200px;
    width: 300px;
    z-index: 1;
`;
export const Button = styled.button`
    background-color:#0084FF;
    color: #fff;
    padding: 0px 5px;
    border-radius: 20px;
    &:hover{
        background-color:#4BA6FB;
        cursor: pointer;
    }
`;