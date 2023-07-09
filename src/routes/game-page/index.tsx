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
//react
import {useState} from "react";
//redux
import { useSelector } from "react-redux";
//types
import { RootState } from "../../redux/store";
import { ItemGameList } from "../../types/ItemGameList";

type prop = {
  gamesList:ItemGameList[]
}
const starsArray: number[] = [... (new Array(4).keys() as any)]

export const GamePage = ({gamesList}:prop) => {

  const [activeIndex, setActiveIndex] = useState<number>();
  const{token} = useSelector((state:RootState) => state.user)

  const nav = useNavigate();
  const params = useParams();
  const game_name = params.game as string;
  const ItemGameList = getGameToShow(gamesList,game_name);
  const ListRecomended = getGamesRecomendeds(ItemGameList,gamesList);

  const onClickStar = (index: number) => {
    if(token !== null){
      setActiveIndex((oldState:number|undefined) => (oldState === index ? undefined : index));
    }else{
      nav(`/auth/`)
    }
  };

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
          <Stars>
            {starsArray.map((index) => (
                  <Star
                    onClick={() => onClickStar(index)}
                    key={`star_${index}`}
                    isActive={index <= activeIndex!}
                  />
                ))}    
          </Stars>
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