import { Container } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { useParams } from "react-router-dom";
import { GridItem } from "../../components/GirdItem";
import ListGames from "../../data/list-games";

export const GenrePage = () => {
    const params = useParams();
    const genre = params.genre;
    const { data } = ListGames();
    const games = data?.filter((game) => game.genre === genre)

    return (
        <>

            <Container>
                <h3>Apenas: {genre}</h3>
                <GridContainer>
                    {games && games.map((game) => (
                        <GridItem game={game} key={game.id} />
                    ))}
                </GridContainer>
            </Container>
        </>
    )
}