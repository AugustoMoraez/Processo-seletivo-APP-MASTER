import { Container, Form ,FormOptions, LogIn,SingIn} from "./style";
import { LoginPage } from "../../components/Forms/login/index";
import { RegisterPage } from "../../components/Forms/register";
import {useState} from "react"



export const AuthPage = ( ) => {

    const[optionForm,setOptionForm] = useState<"SingIn"|"LogIn">("LogIn")

    const handleOptionsForm = () => {
        if(optionForm === "LogIn") return setOptionForm("SingIn");
        setOptionForm("LogIn");        
    }

    return(
        <Container>
            <Form>
                <FormOptions>
                    <LogIn selected={optionForm} onClick={handleOptionsForm}>LogIn</LogIn>
                    <SingIn selected={optionForm} onClick={handleOptionsForm}>SingIn</SingIn>
                </FormOptions>
                {
                    optionForm === "SingIn"
                     ?
                    <RegisterPage/>
                    :
                    <LoginPage/>
                }
            </Form>
        </Container>
    )
}