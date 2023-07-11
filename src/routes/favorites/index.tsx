//components
import { Container } from "./style";
import { InputSearch } from "../../components/inputSearch";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { Load } from "../../components/Loader";
//firestore
import { useCollection } from 'react-firebase-hooks/firestore';
import { store, config } from "../../services/firebaseConfig";
//react
import {useState,useEffect} from "react"
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
                <p>there are no favorite games</p>
                :
                gamesList.map((item)=>(
                    <GridItem key={item.id} item={item}/>
                ))
                }
            </GridContainer>
        </Container>

    )
}