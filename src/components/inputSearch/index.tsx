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

    return(
        <Container>
            <Input onChange={handleInputText} value={inputText} placeholder="Ex: Overwatch 2"/>
            <InputButton onClick={()=>redirect(inputText)}><BsSearch/></InputButton>
        </Container>
    )
}