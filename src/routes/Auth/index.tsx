import React, { useState } from "react";
import { Container,Fieldset,Form } from "./style";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authReducer/authReducer";

export const AuthPage = () => {

    const[inputText,setInputText] = useState("");
    const dispatch = useDispatch();
    const inputTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const hanldeLogin = () => {dispatch(setUser({email:inputText}))}

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

                    <input type="submit" value="Entrar" onClick={hanldeLogin} />
                </Form>
            </Fieldset>
        </Container>
    )
}