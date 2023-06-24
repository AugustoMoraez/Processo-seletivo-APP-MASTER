import {Button,CardContainer,CoverImage,GameName,CompanyName,CardContent,GameInfo} from "./style";
import { game } from "../../types/game";
import { useNavigate } from "react-router-dom";


type prop = {
    game:game
}

export const GridItem = ({game}:prop) => {
    const nav = useNavigate();
    const redirect = () => {
        nav(`game/${game.id}`)       
    }
    return(
        <CardContainer onClick={redirect}>
        <CoverImage src={game.thumbnail} alt={game.title} />
        <CardContent>
          <GameInfo>
          <GameName>{game.title}</GameName>
          <CompanyName>{game.developer}</CompanyName>
          </GameInfo>
          <Button>informação</Button>
        </CardContent>
      </CardContainer>
    )
}