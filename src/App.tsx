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
import { useCollection } from 'react-firebase-hooks/firestore';
import { store, config } from "./services/firebaseConfig";
//types
import { ItemGameList } from './types/ItemGameList';



const App = () => {
  

  const [value] = useCollection(store, config);
  const{listGames,isLoading,Error}=useCustomQuery();
  const{token}=useSelector((state:RootState)=>state.user)
  let gamesList = listGames ? listGames : [];
  const[toggle,setToggle]=useState<boolean>(false);
  const[listUserGames,setListUserGames] = useState<ItemGameList[]>([])
  const dispatch = useDispatch();
  const toggleFunc=(toggle:boolean)=>setToggle(!toggle);

  useEffect(()=>{
    if(token && value !== undefined){
      const func = () => {
        setListUserGames(value.docs.map((doc)=>({...doc.data(),id:doc.id})) as ItemGameList[])
        localStorage.setItem("listGames",JSON.stringify(listUserGames));
        dispatch(setInFavoriteList(JSON.parse(localStorage.getItem("listGames") as string)))
      }
      func()
    }
  },[token,value])

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