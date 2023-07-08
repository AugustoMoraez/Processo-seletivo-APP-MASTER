import { Container,FormContainer,FormHeader,FormBody,FormFooter,InputContainer } from "./style";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { loginData } from "../../../types/AuthForm";

export const LoginPage = () => {

    const schema = yup.object({
        email:yup.string().required("Required field"),
        password:yup.string().required("Required field").min(8,"Passwords have at least 8 characters")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<loginData>({
        resolver: yupResolver(schema),
      })

    const onSubmit = (data:loginData) => {
        console.log(data)
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
                        {...register("email")}
                        />
                        <span>{errors?.email?.message}</span>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="password">Password</label>
                        <input 
                        maxLength={8}
                        type="password" 
                        id="password" 
                        placeholder="********" 
                        {...register("password")}
                        />
                        <span>{errors?.password?.message}</span>
                    </InputContainer>
                    <InputContainer>
                        <input type="submit" value="Log In"  />
                    </InputContainer>
                </FormBody>
                <FormFooter>
                    <p>Don't have a registration?</p>
                    <Link to="/register">register here</Link>
                </FormFooter>
            </FormContainer>
        </Container>
    )
}