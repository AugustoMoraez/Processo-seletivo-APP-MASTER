import { Container,FilterFor } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { useParams } from "react-router-dom";
import { GridItem } from "../../components/GirdItem";
import { game } from "../../types/game";

type prop = {
    games:game[]
}

export const GenrePage = ({games}:prop) => {
    const params = useParams();
    const genre = params.genre;
    const list = games?.filter((game) => game.genre === genre)

    return (
        <>

            <Container>
                <FilterFor>Apenenas: {genre}</FilterFor>
                <GridContainer>
                    {list.map((game) => (
                        <GridItem game={game} key={game.id} />
                    ))}
                </GridContainer>
            </Container>
        </>
    )
}