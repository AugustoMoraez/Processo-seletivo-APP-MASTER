//components
import { Star } from "../../components/ratingStars";
import { Container,SubContainer,Thumbnail,Title,Description,Details,DownloadLink,InfoContainer, FlexContainer, FlexItem, Stars } from "./style";
import { InputSearch } from "../../components/inputSearch";
//router
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//helpers
import { getGameToShow } from "../../helpers/getGameToShow";
import { getGamesRecomendeds } from "../../helpers/getGamesRecomendeds";
import generateUserList from "../../helpers/generateUserList";

import { ItemGameList } from "../../types/ItemGameList";

type prop = {
  gamesList:ItemGameList[]
}

export const GamePage = ({gamesList}:prop) => {

  const nav = useNavigate();
  const params = useParams();
  const game_name = params.game as string;
  const ItemGameList = getGameToShow(gamesList,game_name);
  const ListRecomended = getGamesRecomendeds(ItemGameList,gamesList);
  


  
  return(
    <Container>
      <InputSearch/>
      <SubContainer>
        <InfoContainer>
          <Thumbnail src={ItemGameList.game.thumbnail} alt={ItemGameList.game.title}/>
        </InfoContainer>
        <InfoContainer>
          <Title>{ItemGameList.game.title}</Title>
          <Description>{ItemGameList.game.short_description}</Description>
          <Details>
            <strong>Realease date:</strong> {ItemGameList.game.release_date}
          </Details>
          <Details>
            <strong>Platform:</strong> {ItemGameList.game.platform}
          </Details>
          <Details>
            <strong>Genre:</strong> {ItemGameList.game.genre}
          </Details>
          <Details>
            <strong>Developer:</strong> {ItemGameList.game.developer}
          </Details>
          
          <DownloadLink href={ItemGameList.game.freetogame_profile_url} target="_blank" rel="noopener noreferrer">
            Game
          </DownloadLink>
        </InfoContainer>
      </SubContainer>
      <h2>Why did you choose <br /> <span>{ItemGameList.game.title}</span></h2>
      <SubContainer>
        <FlexContainer>
          {ListRecomended.length > 0 ?
            ListRecomended.map((item)=>(
              <FlexItem key={item.game.id} tumb={item.game.thumbnail} onClick={()=>nav(`/game/${item.game.title}`)}/>
            ))
            :
            <div>No recommendations</div>
          }
        </FlexContainer>
      </SubContainer>
    </Container>
  )
}