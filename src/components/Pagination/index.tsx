import { Container } from "./style"


type prop = {
    nextPage:()=>void,
    currentPage:number,
    backPage:()=>void
}

export const Pagination = ({nextPage,backPage,currentPage}:prop) => {
    return(
        <Container> 
            <button onClick={()=>backPage()}>Back</button>
            <span>Page:{currentPage}</span>
            <button onClick={()=>nextPage()}>Next</button>
        </Container>
    
    )
}