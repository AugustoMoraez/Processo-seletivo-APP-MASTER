import { GameContainer,Thumbnail,Title,Description,Details,DownloadLink } from "./style";
import { game } from "../../types/game";
import { useParams } from "react-router-dom";

type prop = {
    games:game[]
}
export const GamePage = ({games}:prop) => {
    const params = useParams();
    const game_name = params.game as string;
    const filter = games.filter((game)=>(game.title).toLocaleLowerCase() === game_name.toLocaleLowerCase());
    const game = filter[0];
    return(
        <GameContainer>
        <Thumbnail src={game.thumbnail} alt={game.title} />
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
          Baixar Jogo
        </DownloadLink>
      </GameContainer>
    )
}