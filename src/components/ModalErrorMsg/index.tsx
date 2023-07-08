import { Container, ModalMsg } from "./style";


type prop = {
    msg:string,
    toggle:boolean,
    func:()=>void
}

export const ModalMensage = ({msg,func,toggle}:prop) => {
    
    return(
        <Container display={toggle ? "true" : "false"}>
            <ModalMsg>
                <p>{msg}</p>
                <button onClick={func}>OK</button>
            </ModalMsg>
        </Container>
    )
} 