import { AxiosError } from "axios";
import { api } from "../../api/fetchData";
import {useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import { Container } from "./style";


export const ErrMessage = () => {

    const[errorMsg,setErroMsg] =useState<string>("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde");
    const{email}= useSelector((state:rootState)=>state.authenticate);

    useEffect(()=>{
        api.get("/data/",{headers:{"dev-email-address":email}})
        .then(() => {
          return null;
        })
        .catch((error: AxiosError) => {
          if (error.code === 'ECONNABORTED') {
            setErroMsg("O servidor demorou para responder, tente mais tarde")
          }else if(error.response?.status === 500||502||503||504||507||508||509){
            setErroMsg("O servidor fahou em responder, tente recarregar a página")
          }
        });
    },[email])


    
    return(
        <Container>{errorMsg}</Container>
    )
}