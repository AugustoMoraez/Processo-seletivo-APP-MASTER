//components
import { Container,FilterFor } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { Banner } from "../../components/banner";
import { InputSearch } from "../../components/inputSearch";
//router
import { useParams } from "react-router-dom";
//type
import { ItemGameList } from "../../types/ItemGameList";
//helpers
import {getGamesToGenre} from "../../helpers/getGamesToGenre"; 


type prop = {
    gamesList:ItemGameList[]
}

export const GenrePage = ({gamesList}:prop) => {
    const params = useParams();
    const genre = params.genre as string;
    const listGames:ItemGameList[] = getGamesToGenre(gamesList,genre)

    return (
        <>

            <Container>
                <Banner/>
                <InputSearch/>
                <FilterFor>Just: {genre}</FilterFor>
                <GridContainer>
                    {listGames.map((item) => (
                        <GridItem item={item } key={item.game.id} />
                    ))}
                </GridContainer>
            </Container>
        </>
    )
}