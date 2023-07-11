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
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect,useState } from "react";



type prop = {
    gamesList:ItemGameList[],
     
}

export const HomePage = ({gamesList }:prop) => {
     
    
    const [list, setList] = useState<ItemGameList[]>(generateUserList(gamesList));
    
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