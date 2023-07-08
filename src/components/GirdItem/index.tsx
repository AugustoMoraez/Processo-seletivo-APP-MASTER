import {CardContainer,CoverImage,CardContent} from "./style";
import { game } from "../../types/game";
import {AiOutlineRight} from "react-icons/ai"
import { useNavigate } from "react-router-dom";


type prop = {
    game:game
}

export const GridItem = ({game}:prop) => {
    const nav = useNavigate();
    const redirect = () => {
        nav(`/game/${game.title}`)       
    }
    return(
        <CardContainer onClick={redirect}>
        <CoverImage src={game.thumbnail} alt={game.title} />
        <CardContent>
          <h1>{game.title}</h1>
          <span>{`${game.developer} - ${game.genre}`}</span>
          <p>{game.short_description}</p>
          <button>More info  <AiOutlineRight/> </button>
        </CardContent>
      </CardContainer>
    )
}