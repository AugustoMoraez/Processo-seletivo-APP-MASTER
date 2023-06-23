import { Container,Nav,Menu,MenuOption } from "./style";
import { Link } from "react-router-dom";

type props = {
    toggleFunc:()=>void,
    toggleMenu:boolean
}

export const Aside = ({toggleMenu,toggleFunc}:props) => {
    return(
        <Container toggle={toggleMenu.toString()}>
            <Nav toggle={toggleMenu.toString()}>
                <Menu>
                    <MenuOption onClick={toggleFunc}>
                        <Link to="/">Inicio</Link>
                    </MenuOption>
                    <MenuOption onClick={toggleFunc}>
                        <Link to="/produtos">Produtos</Link>
                    </MenuOption>
                    <MenuOption onClick={toggleFunc}>
                        <Link to="/sobre">Sobre</Link>
                    </MenuOption>
                </Menu>
            </Nav>
        </Container>
    )
}