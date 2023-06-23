import { Container,GridContainer } from "./style";
import { Load } from "../../components/Loader";
import { ErrMessage } from "../../components/ErrorMsg";

import ListGames from "../../data/list-games";

export const HomePage = () => {

    const{data,isLoading,isError} = ListGames();

    return(
        <Container>
            <GridContainer>
                {isError && <ErrMessage/> }
                {isLoading && <Load/> }
                {data && data.map((item)=>(
                    <div key={item.id}>{item.title}</div>
                ))}
            </GridContainer>
        </Container>
    )
}