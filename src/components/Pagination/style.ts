import { styled } from "styled-components";

export const Container = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        margin: 0px 20px;
        color:#0084FF;
    }
    button{
        background-color: #0084FF;
        border: 1px solid #0084FF;
        padding:2px 3px;
        font-size: 15px;
        border-radius: 5px;
        color:#fff;
        &:hover{
            cursor: pointer;
            background-color: #fff;
            color:#0084FF;
        }
    }


`;