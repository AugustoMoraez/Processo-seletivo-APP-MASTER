import { Container } from "./style";
import { AxiosError } from "axios";
import {useState,useEffect} from "react"

type prop = {
  Error:AxiosError<unknown, any> | null,
  
}

export const ErroMessage = ({Error}:prop) => {
  const[msgError,setMsgError] = useState("The server will not be able to respond for now, please try to come back later.");
  
  useEffect(()=>{
    const arrayErros = [500,502,503,504,507,508,509];
    if(Error){ 
      if(Error.code === "ECONNABORTED"){
        setMsgError("The server took a while to respond, please try again later");
      }
      if(Error.response?.status && arrayErros.includes(Error.response?.status)){
        setMsgError("The server failed to respond, try reloading the page")
      }
    }
  },[])
  
  
  return(
      <Container>
        <p>{msgError}</p>
        <a href="/">Try again</a>
      </Container>
  )
}