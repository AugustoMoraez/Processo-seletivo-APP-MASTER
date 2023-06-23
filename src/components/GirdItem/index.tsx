import { Container,Thumbnail, Filter,Button } from "./style";
import { game } from "../../types/game";


type prop = {
    game:game
}

export const GridItem = ({game}:prop) => {
    return(
        <Container>
            <Thumbnail src={game.thumbnail} alt={game.title}/>
            <Filter>
                <Filter>
                    <p>{game.title}</p>
                    <Button>MAIS</Button>
                </Filter>
            </Filter>

        </Container>
    )
}