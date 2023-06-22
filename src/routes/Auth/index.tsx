import React, { useState } from "react";
import { Container,Fieldset,Form } from "./style";
import { useFecth } from "../../api/useFetch";




export const AuthPage = () => {

    const[inputText,setInputText] = useState("");

    const inputTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const inputLogin = () => {
        console.log(useFecth(inputText))
    }

    return(
        <Container>
            <Fieldset>
                <legend>GamesDev</legend>
                <Form>
                    <label htmlFor="email">Seu email:</label>
                    
                    <input 
                     value={inputText}
                     onChange={inputTextChange}
                     type="email" 
                     required name="email"
                     placeholder="email@email.com"
                     />

                    <input type="submit" value="Entrar" onClick={inputLogin} />
                </Form>
            </Fieldset>
        </Container>
    )
}