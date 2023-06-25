import { Container } from "./style";
import { AxiosError } from "axios";
import {useState,useEffect} from "react"

type prop = {
  Error:AxiosError<unknown, any> | null 
}

export const ErroMessage = ({Error}:prop) => {
  const[msgError,setMsgError] = useState("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde");
  
  useEffect(()=>{
    const arrayErros = [500,502,503,504,507,508,509];
    if(Error){ 
      if(Error.code === "ECONNABORTED"){
        setMsgError("O servidor demorou para responder, tente mais tarde");
      }
      if(Error.response?.status && arrayErros.includes(Error.response?.status)){
        setMsgError("O servidor fahou em responder, tente recarregar a página")
      }
    }
  },[])
  
  
  return(
      <Container>
        <p>{msgError}</p>
      </Container>
  )
}