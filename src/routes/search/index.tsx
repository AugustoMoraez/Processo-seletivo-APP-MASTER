//components
import {Container} from "./style";
import { InputSearch } from "../../components/inputSearch";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
//router
import { useParams } from "react-router-dom";
//helpers
import { getItemSearch } from "../../helpers/getItemSearch";
//type
import { ItemGameList } from "../../types/ItemGameList";

type prop ={
    gamesList:ItemGameList[]
}

export const SearchPage = ({gamesList}:prop) => {
    const params = useParams();
    const gameName = params.itemSearch as string;
    const resultsOfSearch = getItemSearch(gameName,gamesList);

    return(
        <Container>
            <InputSearch/>
            
            <GridContainer>
                    {resultsOfSearch.length > 0 ? 
                    resultsOfSearch.map((item)=>(
                        <GridItem item={item } key={item.game.id}/>
                    ))
                    :
                    <div>No results for: {gameName}</div>
                }
            </GridContainer>
        </Container>

    )
}