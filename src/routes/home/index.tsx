import { Container } from "./style";
import getData from "../../data/data";

export const HomePage = () => {
    
    const list = getData();

    return(
        <Container>
            {list.map((game)=>(
                <div key={game.id}>{game.title}</div>
            ))}
        </Container>
    )
}