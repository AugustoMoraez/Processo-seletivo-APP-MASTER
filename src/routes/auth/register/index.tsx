import { Container,FormContainer,FormHeader,FormBody,FormFooter,InputContainer } from "./style";
import React from "react"
import {Link} from "react-router-dom";


export const RegisterPage = () => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return(
        <Container>
            <FormContainer>
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
                        <label htmlFor="repeat-password">Repita senha</label>
                        <input minLength={8} maxLength={8} type="password" name="repeat-password" id="repeat-password" placeholder="********" />
                    </InputContainer>
                    <InputContainer>
                        <input type="submit" value="Cadastrar"  />
                    </InputContainer>
                </FormBody>
                <FormFooter>
                    <p>Possui cadastro?</p>
                    <Link to="/login">Entre aqui</Link>
                </FormFooter>
            </FormContainer>
        </Container>
    )
}