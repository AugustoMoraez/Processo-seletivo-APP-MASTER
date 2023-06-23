import { Container,Nav,Menu,MenuOption } from "./style";
import { Link } from "react-router-dom";

type props = {
    toggleFunc:()=>void,
    toggle:boolean
}

export const Aside = ({toggle,toggleFunc}:props) => {
    return(
        <Container toggle={toggle.toString()}>
            <Nav>
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