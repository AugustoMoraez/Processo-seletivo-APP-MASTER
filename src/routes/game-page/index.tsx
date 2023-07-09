import { Container,SubContainer,Thumbnail,Title,Description,Details,DownloadLink,InfoContainer, FlexContainer, FlexItem, Stars } from "./style";
import { InputSearch } from "../../components/inputSearch";
import { game } from "../../types/game";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getGameToShow } from "../../helpers/getGameToShow";
import {useState} from "react";
import { getGamesRecomendeds } from "../../helpers/getGamesRecomendeds";
import { Star } from "../../components/ratingStars";


type prop = {
  games:game[]
}
const starsArray: number[] = [... (new Array(4).keys() as any)]

export const GamePage = ({games}:prop) => {

  const [activeIndex, setActiveIndex] = useState<number>();

  const nav = useNavigate();
  const params = useParams();
  const game_name = params.game as string;
  const game = getGameToShow(games,game_name);
  const ListRecomended = getGamesRecomendeds(game,games);

  const onClickStar = (index: number) => {
    setActiveIndex((oldState:number|undefined) => (oldState === index ? undefined : index));
  };

  return(
    <Container>
      <InputSearch/>
      <SubContainer>
        <InfoContainer>
          <Thumbnail src={game.thumbnail} alt={game.title}/>
        </InfoContainer>
        <InfoContainer>
          <Title>{game.title}</Title>
          <Description>{game.short_description}</Description>
          <Details>
            <strong>Realease date:</strong> {game.release_date}
          </Details>
          <Details>
            <strong>Platform:</strong> {game.platform}
          </Details>
          <Details>
            <strong>Genre:</strong> {game.genre}
          </Details>
          <Details>
            <strong>Developer:</strong> {game.developer}
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
          <DownloadLink href={game.freetogame_profile_url} target="_blank" rel="noopener noreferrer">
            Game
          </DownloadLink>
        </InfoContainer>
      </SubContainer>
      <h2>Why did you choose <br /> <span>{game.title}</span></h2>
      <SubContainer>
        <FlexContainer>
          {ListRecomended.length > 0 ?
            ListRecomended.map((item)=>(
              <FlexItem key={item.id} tumb={item.thumbnail} onClick={()=>nav(`/game/${item.title}`)}/>
            ))
            :
            <div>No recommendations</div>
          }
        </FlexContainer>
      </SubContainer>
       
       
        
    </Container>
  )
}