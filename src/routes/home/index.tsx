import { Container } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { Load } from "../../components/Loader";
import { ErrMessage } from "../../components/ErrorMsg";
import { GridItem } from "../../components/GirdItem";
import ListGames from "../../data/list-games";

export const HomePage = () => {

    const{data,isLoading,isError} = ListGames();

    return(
        <Container>
                {isLoading?
                    <Load/>
                :
                <GridContainer>
                    {
                        isError?
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