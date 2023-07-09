import {Container} from "./style";
import { InputSearch } from "../../components/inputSearch";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { useParams } from "react-router-dom";
import { game } from "../../types/game";
import { getItemSearch } from "../../helpers/getItemSearch";



type prop ={
    games:game[]
}

export const SearchPage = ({games}:prop) => {
    const params = useParams();
    const gameName = params.itemSearch as string;

    

    const resultsOfSearch = getItemSearch(gameName,games);
    return(
        <Container>
            <InputSearch/>
            
            <GridContainer>
                    {resultsOfSearch.length > 0 ? 
                    resultsOfSearch.map((item)=>(
                        <GridItem game={item} key={item.id}/>
                    ))
                    :
                    <div>No results for: {gameName}</div>
                }
            </GridContainer>
        </Container>

    )
}