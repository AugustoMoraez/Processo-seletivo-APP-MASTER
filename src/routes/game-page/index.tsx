//components
import { Container,SubContainer,Thumbnail,Title,Description,Details,Avaliation,DownloadLink,InfoContainer, FlexContainer, FlexItem } from "./style";
import { InputSearch } from "../../components/inputSearch";
import { Star } from "../../components/ratingStars";
import { Stars } from "../../components/GirdItem/style";
import { LikeButton } from "../../components/LikeButton";
//router
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//helpers
import { getGameToShow } from "../../helpers/getGameToShow";
import { getGamesRecomendeds } from "../../helpers/getGamesRecomendeds";
import generateUserList from "../../helpers/generateUserList";
//type
import { dataCard } from "../../types/dataCard";
import { RootState } from "../../redux/store";
//react
import { useEffect,useState } from "react";
//redux
import { useSelector,useDispatch } from "react-redux";
import { setInUserGamesList } from "../../redux/userReducer";



type prop = {
  gamesList:dataCard[]
}

const starsArray: number[] = [... (new Array(4).keys() as any)]

export const GamePage = ({gamesList}:prop) => {
  const nav = useNavigate();
  const{token} = useSelector((state:RootState) => state.user)
  const dispatch = useDispatch();
  //vars data game
  const params = useParams();
  const game_name = params.game as string;
  const list = generateUserList(gamesList,); 
  const GameToShow = getGameToShow(list,game_name);
  const ListRecomended = getGamesRecomendeds(GameToShow,gamesList);
  /////////////////////
  
  //vars button like 
  const [activeIndex, setActiveIndex] = useState<number|undefined>(GameToShow.stars === "undefined" ? undefined : parseInt(GameToShow.stars));
  const [isLiked, setisLiked] = useState<boolean>(GameToShow.favorite);  
  
  useEffect(()=>{
    setActiveIndex(GameToShow.stars === "undefined" ? undefined : parseInt(GameToShow.stars))
    setisLiked(GameToShow.favorite);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })



  const SelectStart =  (index: number) => {
    if(token === null){
      nav(`/auth/`)
    }else{
      const itemPayload = {
        id:GameToShow.id,
        game:GameToShow.game,
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
        id:GameToShow.id,
        game:GameToShow.game,
        favorite:!isLiked,
        stars: activeIndex === undefined ? "undefined" : activeIndex.toString()
      }
      dispatch(setInUserGamesList(itemPayload));
      setisLiked(!isLiked);      
    }
  }
  
  

  return(
    <Container>
      <InputSearch/>
      <SubContainer>
        <InfoContainer>
          <Thumbnail src={GameToShow.game.thumbnail} alt={GameToShow.game.title}/>
        </InfoContainer>
        <InfoContainer>
          
          <Title>{GameToShow.game.title}</Title>
          <Description>{GameToShow.game.short_description}</Description>
         
          <Details>
            <strong>Realease date:</strong> {GameToShow.game.release_date}
          </Details>
          <Details>
            <strong>Platform:</strong> {GameToShow.game.platform}
          </Details>
          <Details>
            <strong>Genre:</strong> {GameToShow.game.genre}
          </Details>
          <Details>
            <strong>Developer:</strong> {GameToShow.game.developer}
          </Details>
         
          <Avaliation>
            <LikeButton  isLiked={isLiked} onClick={handleLikeButton}/>
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
          
          <DownloadLink href={GameToShow.game.freetogame_profile_url} target="_blank" rel="noopener noreferrer">
            Game
          </DownloadLink>
        
        </InfoContainer>
      </SubContainer>
      <h2>Why did you choose <br /> <span>{GameToShow.game.title}</span></h2>
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