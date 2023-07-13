//components
import { Container,FilterFor } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { Banner } from "../../components/banner";
import { InputSearch } from "../../components/inputSearch";
//router
import { useParams } from "react-router-dom";
//type
import { dataCard } from "../../types/dataCard";
//helpers
import {getGamesToGenre} from "../../helpers/getGamesToGenre"; 
import generateUserList from "../../helpers/generateUserList";


type prop = {
    gamesList:dataCard[]
}

export const GenrePage = ({gamesList}:prop) => {
    const params = useParams();
    const genre = params.genre as string;
    const listGames:dataCard[] = getGamesToGenre(generateUserList(gamesList),genre)

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