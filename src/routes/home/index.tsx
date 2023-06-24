import { Container } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { Load } from "../../components/Loader";
import { ErrMessage } from "../../components/ErrorMsg";
import { GridItem } from "../../components/GirdItem";
import { game } from "../../types/game";


type prop = {
    data:game[]|undefined,
    isLoading:boolean,
    isError:boolean
}

export const HomePage = ({data,isLoading,isError}:prop) => {

    return(
        <Container>
                {isLoading?
                    <Load/>
                :
                <GridContainer>
                    {
                    isError ?
                    <ErrMessage/>
                    :
                    data && data.map((item)=>(
                        <GridItem game={item} key={item.id}/>
                    ))
                    }
                </GridContainer>
                
                }
        </Container>
    )
}