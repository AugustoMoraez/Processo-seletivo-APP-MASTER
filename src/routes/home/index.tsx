import { Container } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { game } from "../../types/game";
import { Banner } from "../../components/banner";

type prop = {
    games:game[]
}

export const HomePage = ({games}:prop) => {
     
    return(
        <Container>
            <Banner/>
            <GridContainer>
                {games.map((item)=>(
                    <GridItem game={item} key={item.id}/>
                ))} 
            </GridContainer>
        </Container>
    )
}