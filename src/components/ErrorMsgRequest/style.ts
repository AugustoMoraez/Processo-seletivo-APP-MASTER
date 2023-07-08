import { styled } from "styled-components";

export const Container = styled.div`
    margin-top:50vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 600;
    color:#333;
    a{
        color: #fff;
        background-color: #007BFF;
        padding: 3px 6px;
        max-width: 100px;
        margin: auto;
        border-radius: 10px;
        &:hover{
            opacity: 0.7;
        }
    }
`;