import { Container,FilterFor } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { useParams } from "react-router-dom";
import { GridItem } from "../../components/GirdItem";
import ListGames from "../../api/useCustomQuery";

export const GenrePage = () => {
    const params = useParams();
    const genre = params.genre;
    const { data } = ListGames();
    const games = data?.filter((game) => game.genre === genre)

    return (
        <>

            <Container>
                <FilterFor>Apenenas: {genre}</FilterFor>
                <GridContainer>
                    {games && games.map((game) => (
                        <GridItem game={game} key={game.id} />
                    ))}
                </GridContainer>
            </Container>
        </>
    )
}