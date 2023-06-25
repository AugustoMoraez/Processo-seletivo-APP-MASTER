import { Container,SubContainer,Thumbnail,Title,Description,Details,DownloadLink,InfoContainer, FlexContainer, FlexItem } from "./style";
import { InputSearch } from "../../components/inputSearch";
import { game } from "../../types/game";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getGameToShow } from "../../helpers/getGameToShow";
import { getGamesRecomendeds } from "../../helpers/getGamesRecomendeds";


type prop = {
    games:game[]
}
export const GamePage = ({games}:prop) => {
  const nav = useNavigate();
  const params = useParams();
  const game_name = params.game as string;
  const game = getGameToShow(games,game_name);
  const ListRecomended = getGamesRecomendeds(game,games);

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
            <strong>Data de Lançamento:</strong> {game.release_date}
          </Details>
          <Details>
            <strong>Plataformas:</strong> {game.platform}
          </Details>
          <Details>
            <strong>Gênero:</strong> {game.genre}
          </Details>
          <Details>
            <strong>Desenvolvedora:</strong> {game.developer}
          </Details>
          <DownloadLink href={game.freetogame_profile_url} target="_blank" rel="noopener noreferrer">
            Jogo
          </DownloadLink>
        </InfoContainer>
      </SubContainer>
      <h2>Porque você escolheu <br /> <span>{game.title}</span></h2>
      <SubContainer>
        <FlexContainer>
          {ListRecomended.length > 0 ?
            ListRecomended.map((item)=>(
              <FlexItem key={item.id} tumb={item.thumbnail} onClick={()=>nav(`/game/${item.title}`)}/>
            ))
            :
            <div>Sem recomendações</div>
          }
        </FlexContainer>
      </SubContainer>
       
       
        
    </Container>
  )
}