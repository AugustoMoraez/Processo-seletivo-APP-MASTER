import { Container,MenuBar } from "./style";

type props = {
    toggle:boolean,
    toggleFunc:()=>void
}

export const Menu = ({toggleFunc,toggle }:props) => {

    return(       
        <Container toggle={toggle ? "true" : "false"} onClick={()=>toggleFunc()}>
            <MenuBar/>
            <MenuBar/>
        </Container>     
    )
}