import { CardContainer, CoverImage, CardContent, ActionCard, Avaliation, Stars } from "./style";
import { game } from "../../types/game";
import { AiOutlineRight } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import { Star } from "../ratingStars";


type prop = {
  game: game
}

const starsArray: number[] = [... (new Array(4).keys() as any)]

export const GridItem = ({ game }: prop) => {
  
  const [activeIndex, setActiveIndex] = useState<number>();
  const nav = useNavigate();
  const redirect = () => {

    nav(`/game/${game.title}`)
  }
  

  const onClickStar = (index: number) => {
    setActiveIndex((oldState:number|undefined) => (oldState === index ? undefined : index));
  };
  return (
    <CardContainer>
      <CoverImage src={game.thumbnail} alt={game.title} />
      <CardContent>
        <h1>{game.title}</h1>
        <span>{`${game.developer} - ${game.genre}`}</span>
        <p>{game.short_description}</p>
        <ActionCard>
          <button onClick={redirect}>More info  <AiOutlineRight /> </button>
          <Avaliation>
            <Stars>
              {starsArray.map((index) => (
                <Star
                  onClick={() => onClickStar(index)}
                  key={`star_${index}`}
                  isActive={index <= activeIndex!}
                />
              ))}
            </Stars>
          </Avaliation>
        </ActionCard>
      </CardContent>
    </CardContainer>
  )
}