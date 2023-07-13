import styled from "styled-components";

type prop = {
    display:"true"|"false"
}

export const Container = styled.div<prop>`
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    height: 100vh;
    display: ${props => props.display === "true" ? "block" : "none"};
    position: absolute;
    top: 0;
    z-index: 98;
    overflow: hidden;
     
     
`;


export const ModalMsg = styled.div`
    z-index: 98;
    position: absolute;
    background-color: #fefefe;
    padding: 20px;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    box-shadow: 1px 0px 5px #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    p{
        color: #333;
        margin-bottom: 10px;
        text-align: center;
    }
    button{
        background-color: #0084FF;
        color: #fff;
        padding: 3px 6px;
        border-radius: 5px;
        &:hover{
            cursor: pointer;
            opacity:0.7;
        }
    }
`;