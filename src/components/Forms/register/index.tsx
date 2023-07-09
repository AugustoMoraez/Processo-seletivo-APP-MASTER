//components
import { Container, FormContainer, FormHeader, FormBody, InputContainer } from "../style";
import { ModalMensage } from "../../ModalErrorMsg";
import { Load } from "../../Loader";
//react
import { useState, useEffect } from "react"

//router
import { useNavigate } from "react-router-dom";

//yup and react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../services/firebaseConfig";
//types
import { singInData } from "../../../types/AuthForm";
//redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../redux/reducers/userReducer";


export const RegisterPage = () => {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const [errorModalEmail, setErrorModalEmail] = useState(false);
    const [errorModalPassword, setErrorModalPassword] = useState(false);

    const schema = yup.object({
        email: yup.string().required("Required field"),
        password: yup.string().required("Required field").min(8, "Passwords have at least 8 characters"),
        repeatedPassword: yup.string().required("Required field").min(8, "Passwords have at least 8 characters")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<singInData>({
        resolver: yupResolver(schema),
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    useEffect(()=>{
        if(user){
            dispatch(setCurrentUser(user.user.uid))
            nav("/")
        }
        if(error){
            setErrorModalEmail(!errorModalEmail)
        }
    },[user,error])


    const onSubmit = (data: singInData) => {
        if (data.password === data.repeatedPassword) {
            createUserWithEmailAndPassword(data.email, data.password);
        } else {
            setErrorModalPassword(true)
        }

        if (error) {
            setErrorModalEmail(true)
            console.log(error.message)
        }
    }

    if (loading) {
        return (
            <Container>
                <FormBody>
                    <Load />
                </FormBody>
            </Container>
        )
    }
    return (
        <Container>

            <ModalMensage
                msg="invalid email or already in use"
                toggle={errorModalEmail}
                func={() => setErrorModalEmail(false)}
            />
            <ModalMensage
                msg="Passwords must be identical"
                toggle={errorModalPassword}
                func={() => setErrorModalPassword(false)}
            />
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>
                    <h1>Your Account</h1>
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
                            {...register("password")} />
                        <span>{errors?.password?.message}</span>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="repeat-password">Repeat password</label>
                        <input
                            maxLength={8}
                            type="password"
                            id="repeat-password"
                            placeholder="********"
                            {...register("repeatedPassword")} />
                        <span>{errors?.repeatedPassword?.message}</span>
                    </InputContainer>
                    <InputContainer>
                        <input type="submit" value="SingIn" />
                    </InputContainer>
                </FormBody>

            </FormContainer>
        </Container>
    )
}