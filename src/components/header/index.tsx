import {Container} from "./style";
import { Menu } from "../Menu";
import { Link } from "react-router-dom";



type props = {
    toggle:boolean,
    toggleFunc:()=>void    
}

export const Header = ({toggleFunc,toggle }:props) => {
    return(
        <Container>

            <Link to="/">
                GameDev
            </Link>
            
            <Menu toggle={toggle}  toggleFunc={toggleFunc} />

        </Container>
    )
}