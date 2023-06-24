import { Container } from "./style";
import { game } from "../../types/game";

type prop = {
    games:game[]
}
export const GamePage = ({games}:prop) => {
    
    return(
        <Container>
            {games.map((item)=>(
                <div>{item.id}</div>
            ))}
        </Container>
    )
}