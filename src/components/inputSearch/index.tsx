import { KeyboardEvent } from "react";
import { Container,Input,InputButton } from "./style";
import {useState} from "react";
import {BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";



export const InputSearch = () => {

    const[inputText,setInputText] = useState("");
    const nav = useNavigate();
    const handleInputText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const redirect = (gameName:string) => {
        nav(`/search/${gameName}`)
    }

    const PressEnter = (e:KeyboardEvent) => {
        if(e.key === "Enter"){
            redirect(inputText)
        }
    }

    return(
        <Container>
            <Input onKeyDown={PressEnter} onChange={handleInputText} value={inputText} placeholder="Ex: Overwatch 2"/>
            <InputButton onClick={()=>redirect(inputText)}><BsSearch/></InputButton>
        </Container>
    )
}