import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const FormContainer = styled.form`
    width: 100%;
    max-width:520px;
    height: 407px;
    color:#333;

`;
export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 40px;

    h1{
        color:#0084FF;
        font-size: 50px;
        cursor: default;
    }
    span{
        cursor: default;
        color:#333;
        font-weight: 600;
    }
`;
export const FormBody = styled.div`
  
`;
export const InputContainer = styled.div`
    width: 100% ;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    span{
        color:#ff000f;
    }
    input{
        width: 100%;
        border-radius: 12px;
        border: 1px solid #E4E4E7;
        padding:4px 10px;
        box-shadow: 0px 0px 2px #333;
    }
    input[type="submit"]{
        border: 1px solid #0084FF;
        background-color: #0084FF;
        color: #eee;

        &:hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
    input[type="email"]:focus,
    input[type="password"]:focus{
        box-shadow:0px 0px 2px #0084FF;
    }
    input[type="email"]:invalid,
    input[type="password"]:invalid{
        box-shadow:0px 0px 2px red;
    }
    
`;

export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
        color:#5C73DB;
    }
`;