//components
import { Container } from './appStyle';
import { Header } from './components/header';
import { Aside } from './components/Aside';
import { Load } from './components/Loader';
import { ErroMessage } from './components/ErrorMsgRequest';
//pages
import {AuthPage} from './routes/auth/index';
import { HomePage } from './routes/home';
import { GenrePage } from './routes/genero';
import { GamePage } from './routes/game-page';
import {SearchPage} from './routes/search';
import { FavoritesPage } from './routes/favorites';
//libs
import { Routes,Route } from 'react-router-dom';
import  {useSelector} from "react-redux";
import  {useDispatch} from "react-redux";
import { RootState } from './redux/store';
import {setInFavoriteList} from "./redux/reducers/userReducer"
//hooks
import { useState,useEffect } from 'react';
import useCustomQuery from './api/useCustomQuery';
//firestore
import { onSnapshot } from 'firebase/firestore';
import { store } from "./services/firebaseConfig";
//types
import { ItemGameList } from './types/ItemGameList';



const App = () => {
  

  const{listGames,isLoading,Error}=useCustomQuery();
  const{token}=useSelector((state:RootState)=>state.user)
  let gamesList = listGames ? listGames.sort((a,b)=>a.game.title > b.game.title ? 1 : -1) : [];
  const[toggle,setToggle]=useState<boolean>(false);
  const[listUserGames,setListUserGames] = useState<ItemGameList[]>([])
  const dispatch = useDispatch();
  const toggleFunc=(toggle:boolean)=>setToggle(!toggle);

  useEffect(()=>{
    if(token){
      const unSub = onSnapshot(store,(data)=>{
        let list:any[] = [];
        data.docs.forEach((doc) => {
          list.push({id:doc.id, ...doc.data()})
        })
        setListUserGames(list)
        localStorage.setItem("ListGames",JSON.stringify(list))
        dispatch(setInFavoriteList(JSON.parse(localStorage.getItem("ListGames") as string)))
      },
      (error)=>alert("firestore error request:"+error))
      return () => {unSub()}
    }
  },[token])

  if(isLoading){
    return(
      <Container>
        <Load/>
      </Container>
    )
  }
  if(Error){
    return(
      <Container>
        <ErroMessage Error={Error}/>
      </Container>
    )
  }
  return (
    <Container> 
      <Header  toggleFunc={()=>toggleFunc(toggle)} />
      <Aside 
      toggle={toggle} 
      toggleFunc={()=>toggleFunc(toggle)} 
      />
      <Routes>
        <Route path="/" element={<HomePage gamesList={ gamesList }  />} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/favorites" element={<FavoritesPage gamesList={listUserGames}/>} />
        
        <Route path="/game/:game" element={<GamePage gamesList={gamesList }/>} />
        <Route path="/filter/:genre" element={<GenrePage gamesList={gamesList  }/>} />
        <Route path="/search/:itemSearch" element={<SearchPage gamesList={ gamesList }/>} />
      </Routes>
      
    </Container>
  );
};

export default App;