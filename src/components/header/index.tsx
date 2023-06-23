import {Container} from "./style";
import { Menu } from "../Menu";
import { Link } from "react-router-dom";



type props = {
    toggleFunc:()=>void,
    
}

export const Header = ({toggleFunc}:props) => {
    return(
        <Container>

            <Link to="/">
                GameDev
            </Link>
            
            <Menu toggleFunc={toggleFunc} />

        </Container>
    )
}