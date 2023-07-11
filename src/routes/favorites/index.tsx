//components
import { Container } from "./style";
import { InputSearch } from "../../components/inputSearch";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { ItemGameList } from "../../types/ItemGameList";


type prop = {
    gamesList:ItemGameList[]
}



export const FavoritesPage = ({gamesList}:prop) => {
     
    
    return (
        <Container>
            <InputSearch />
            <GridContainer>
                {gamesList.length === 0 ?
                <p>no game found</p>
                :
                gamesList.map((item)=>(
                    <GridItem key={item.id} item={item}/>
                ))
                }
            </GridContainer>
        </Container>

    )
}