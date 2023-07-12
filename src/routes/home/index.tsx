//components
import { Container } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { Banner } from "../../components/banner";
import { InputSearch } from "../../components/inputSearch";
//type
import { ItemGameList } from "../../types/ItemGameList";
//helpers
import generateUserList from "../../helpers/generateUserList";
//redux



type prop = {
    gamesList:ItemGameList[],
     
}

export const HomePage = ({gamesList }:prop) => {
     
    
    const list= generateUserList(gamesList);
    
    return(
        <Container>
            <Banner/>
            <InputSearch/>
            <GridContainer>
                 
                {list.map((item)=>(
                    <GridItem item={item} key={item.game.id}/>
                ))} 
                
            </GridContainer>
        </Container>
    )
}