import { Container,FormContainer,FormHeader,FormBody,FormFooter,InputContainer } from "./style";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { singInData } from "../../../types/AuthForm";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../services/firebaseConfig";


export const RegisterPage = () => {
    
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const schema = yup.object({
        email:yup.string().required("Required field"),
        password:yup.string().required("Required field").min(8,"Passwords have at least 8 characters"),
        repeatedPassword:yup.string().required("Required field").min(8,"Passwords have at least 8 characters")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<singInData>({
        resolver: yupResolver(schema),
      })

    const onSubmit = (data:singInData) => {
        if(data.password === data.repeatedPassword){
            createUserWithEmailAndPassword(data.email,data.password)
        }else{
            console.log("erro")
        }
    }

    return(
        <Container>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>
                    <h1>GameDev</h1>
                    <span>fill in your details to proceed</span>
                </FormHeader>
                <FormBody>
                    <InputContainer>
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="email@email.com.br"
                        {...register("email")} />
                        <span>{errors?.email?.message}</span>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="password">Password</label>
                        <input 
                        maxLength={8}
                        type="password"  
                        id="password" 
                        placeholder="********" 
                        {...register("password")}/>
                        <span>{errors?.password?.message}</span>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="repeat-password">Repeat password</label>
                        <input 
                        maxLength={8} 
                        type="password" 
                        id="repeat-password" 
                        placeholder="********" 
                        {...register("repeatedPassword")}/>
                        <span>{errors?.repeatedPassword?.message}</span>
                    </InputContainer>
                    <InputContainer>
                        <input type="submit" value="SingIn"  />
                    </InputContainer>
                </FormBody>
                <FormFooter>
                    <p>Do you have a registration?</p>
                    <Link to="/login">LogIn here</Link>
                </FormFooter>
            </FormContainer>
        </Container>
    )
}