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
import {setInUserGamesList} from "../../redux/reducers/userReducer"
//types
import { RootState } from "../../redux/store";
import { ItemGameList } from "../../types/dataCard";



type prop = {
  item: ItemGameList
}

const starsArray: number[] = [... (new Array(4).keys() as any)]

export const GridItem = ({ item }: prop) => {
  
  const [activeIndex, setActiveIndex] = useState<number|undefined>(item.stars === "undefined" ? undefined : parseInt(item.stars));
  const [isLiked, setisLiked] = useState<boolean>(item.favorite);
  const{token} = useSelector((state:RootState) => state.user)
  const nav = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    nav(`/game/${item.game.title}`)
  }
  
  const SelectStart =  (index: number) => {
   
    if(token === null){
      nav(`/auth/`)
    }else{
      const itemPayload = {
        id:item.id,
        game:item.game,
        favorite:isLiked,
        stars:activeIndex === index ? "undefined" : index.toString()
        
      }
      dispatch(setInUserGamesList(itemPayload))
      setActiveIndex((oldState:number|undefined) => (oldState === index ? undefined : index));
    }
  };

  const handleLikeButton = () => {
    if(token === null){
      nav(`/auth/`)
    }else{
      
      
      const itemPayload = {
        id:item.id,
        game:item.game,
        favorite:!isLiked,
        stars: activeIndex === undefined ? "undefined" : activeIndex.toString()

      }
      dispatch(setInUserGamesList(itemPayload))
      setisLiked(!isLiked)      
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
            <LikeButton isLiked={isLiked} onClick={handleLikeButton}/>
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