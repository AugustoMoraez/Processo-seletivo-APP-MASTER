//Componentes
import { Container,FormContainer,FormHeader,FormBody,InputContainer,Loader } from "../style";
import { ModalMensage } from "../../ModalErrorMsg";

//redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../redux/userReducer";
//hooks react
import {useState,useEffect} from "react"
//hooks Router
import { useNavigate } from "react-router-dom";
//hooks React hook form and yup
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
//types
import { loginData } from "../../../types/AuthForm";
//hooks firebase 
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../../../services/firebaseConfig";

export const LoginPage = () => {

    const[errorModal,setErrorModal] = useState(false);    
       
    const nav = useNavigate();
    const dispatch = useDispatch();    

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
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(()=>{
        if(user){
            dispatch(setCurrentUser(user.user.uid))
            nav("/")
        }
        if(error){
            setErrorModal(!errorModal)
        }
    },[user,error])

    const onSubmit = (data:loginData) => {
        signInWithEmailAndPassword(data.email,data.password)        
    }

    if(loading){
        return(
            <Container>
                <FormBody>
                    <Loader/>
                </FormBody>
            </Container>
        )
    }
    return(
         
        <Container>
            
            <ModalMensage 
            msg="email or password invalid" 
            toggle={errorModal} 
            func={()=>setErrorModal(!errorModal)} />
            
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>
                    <h1>Login Account</h1>
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
                        <input type="submit" value="Log In" />
                    </InputContainer>
                </FormBody>
            </FormContainer>
        </Container>
         
    )
}