//components
import { Container } from './appStyle';
import { Header } from './components/header';
import { Aside } from './components/Aside';
import { Load } from './components/Loader';
import { ErroMessage } from './components/ErrorMsgRequest';
import { RouteList } from './routes/routeList';
//libs
import  {useSelector} from "react-redux";
import  {useDispatch} from "react-redux";
import {setUserGamesList} from "./redux/reducers/userReducer"
//hooks
import { useState,useEffect } from 'react';
import useCustomQuery from './api/useCustomQuery';
//firestore
import { onSnapshot } from 'firebase/firestore';
import { store } from "./services/firebaseConfig";
//types
import { dataCard } from './types/dataCard';
import { RootState } from './redux/store';



const App = () => {
  
  //hooks
  const{listGames,isLoading,Error}=useCustomQuery();
  const{token}=useSelector((state:RootState)=>state.user)
  const dispatch = useDispatch();
  //toggle menu
  const[toggle,setToggle]=useState<boolean>(false);
  //games API APP MASTERS
  let gamesList = listGames ? listGames.sort((a,b)=>a.id > b.id ? 1 : -1)  : [];
  //games API FIREBASE
  const[listUserGames,setListUserGames] = useState<dataCard[]>([])

  useEffect(()=>{
    if(token){
      const unSub = onSnapshot(store,(data)=>{

        let list:any[] = [];
        
        data.docs.forEach((doc) => {
          list.push({id:doc.id, ...doc.data()})
        })
        
        setListUserGames(list)
        localStorage.setItem("ListGames",JSON.stringify(list))
        dispatch(setUserGamesList(JSON.parse(localStorage.getItem("ListGames") as string)))
      })
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
      <Header  toggleFunc={()=>setToggle(!toggle)} />
      <Aside 
      toggle={toggle} 
      toggleFunc={()=>setToggle(!toggle)} 
      />
      <RouteList gamesList={gamesList} listUserGames={listUserGames}/>
      
    </Container>
  );
};

export default App;