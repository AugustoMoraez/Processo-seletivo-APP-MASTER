//components
import {Container} from "./style";
import { InputSearch } from "../../components/inputSearch";
import { GridContainer } from "../../components/GridContainer/style";
//firestore
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from "../../services/firebaseConfig";
//react
import { useEffect,useState } from "react";

export const FavoritesPage = ( ) => {
    const [value, loading, error] = useCollection(
    collection(getFirestore(app), 'favorite-game'),
    {
        snapshotListenOptions: { includeMetadataChanges: false },
    }
    );

    const[data,setData]=useState([])

    useEffect(()=>{
          
    },[value])

    return(
        <Container>
            <InputSearch/>
            <GridContainer>
                <button onClick={()=>console.log(value)}>c</button>
            </GridContainer>
        </Container>

    )
}