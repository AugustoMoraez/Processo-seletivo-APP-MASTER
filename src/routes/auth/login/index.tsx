import React from "react";
import { Container,FormContainer,FormHeader,FormBody,FormFooter,InputContainer } from "./style";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return(
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <FormHeader>
                    <h1>GameDev</h1>
                    <span>Preencha seus dados para prosseguir</span>
                </FormHeader>
                <FormBody>
                    <InputContainer>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="email@email.com.br" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="password">Senha</label>
                        <input minLength={8} maxLength={8} type="password" name="password" id="password" placeholder="********" />
                    </InputContainer>
                    <InputContainer>
                        <input type="submit" value="Entrar"  />
                    </InputContainer>
                </FormBody>
                <FormFooter>
                    <p>Não possui cadastro?</p>
                    <Link to="/register">cadastre-se aqui</Link>
                </FormFooter>
            </FormContainer>
        </Container>
    )
}