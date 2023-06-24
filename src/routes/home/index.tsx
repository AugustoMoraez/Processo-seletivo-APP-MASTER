import { Container } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { game } from "../../types/game";

type prop = {
    games:game[]
}

export const HomePage = ({games}:prop) => {
    
    return(
        <Container>
            <GridContainer>
                {games.map((item)=>(
                    <GridItem game={item} key={item.id}/>
                ))} 
            </GridContainer>
        </Container>
    )
}