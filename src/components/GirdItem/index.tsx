//components
import { CardContainer, CoverImage, CardContent, ActionCard, Avaliation, Stars } from "./style";
import { Star } from "../ratingStars";
import { LikeButton } from "../LikeButton";
//icons
import { AiOutlineRight } from "react-icons/ai"
//react
import {useState} from "react"
//router
import { useNavigate } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setGameList } from "../../redux/reducers/userReducer";
//types
import { RootState } from "../../redux/store";
import { ItemGameList } from "../../types/ItemGameList";



type prop = {
  item: ItemGameList
}

const starsArray: number[] = [... (new Array(4).keys() as any)]

export const GridItem = ({ item }: prop) => {
  
  const [activeIndex, setActiveIndex] = useState<number|undefined>(item.stars);
  const [isLiked, setisLiked] = useState<boolean>(item.inFavoriteList);
  const{token} = useSelector((state:RootState) => state.user)
  const nav = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    nav(`/game/${item.game.title}`)
  }

  const SelectStart = (index: number) => {
    setActiveIndex((oldState:number|undefined) => (oldState === index ? undefined : index));
    console.log(token)
    if(token === null){
      nav(`/auth/`)
    }else{
      dispatch(setGameList({
        game:item.game,
        stars:(index === activeIndex ? undefined : index ),
        favorite:item.favorite,
        inFavoriteList:item.inFavoriteList
      }))
    }
  };

  const handleLikeButton = () => {
    if(token === null){
      nav(`/auth/`)
    }else{

    }
  }

  return (
    <CardContainer>
      <CoverImage src={item.game.thumbnail} alt={item.game.title} />
      <CardContent>
        <h1>{item.game.title}</h1>
        <span>{`${item.game.developer} - ${item.game.genre}`}</span>
        <p>{item.game.short_description}</p>
        <ActionCard>
          <button onClick={redirect}>More info  <AiOutlineRight /> </button>
          <Avaliation>

            <LikeButton isLiked={isLiked} onClick={()=>setisLiked(!isLiked)}/>

            <Stars>
              {starsArray.map((index) => (
                <Star
                  onClick={() => SelectStart(index)}
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