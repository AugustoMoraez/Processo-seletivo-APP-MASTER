//components
import { CardContainer, CoverImage, CardContent, ActionCard, Avaliation, Stars } from "./style";
import { Star } from "../ratingStars";
//data
import { game } from "../../types/game";
//icons
import { AiOutlineRight } from "react-icons/ai"
//react
import {useState} from "react"
//router
import { useNavigate } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//types
import { RootState } from "../../redux/store";



type prop = {
  game: game
}

const starsArray: number[] = [... (new Array(4).keys() as any)]

export const GridItem = ({ game }: prop) => {
  
  const [activeIndex, setActiveIndex] = useState<number|undefined>();
  const{token} = useSelector((state:RootState) => state.user)
  const nav = useNavigate();

  const redirect = () => {
    nav(`/game/${game.title}`)
  }
  

  const onClickStar = (index: number) => {
    if(token !== null){
      setActiveIndex((oldState:number|undefined) => (oldState === index ? undefined : index));
    }else{
      nav(`/auth/`)
    }
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