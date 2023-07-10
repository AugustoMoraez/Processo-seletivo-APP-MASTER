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
import { GamePage } from './routes/game-page';;
import {SearchPage} from './routes/search';
//libs
import { Routes,Route } from 'react-router-dom';
//hooks
import { useState } from 'react';
import useCustomQuery from './api/useCustomQuery';




const App = () => {

  const[toggle,setToggle]=useState<boolean>(false);

  const toggleFunc=(toggle:boolean)=>setToggle(!toggle);

  const{listGames,isLoading,Error}=useCustomQuery();

  const gamesList = listGames ? listGames : [];
  
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
        <Route path="/" element={<HomePage gamesList={gamesList} />} />
        <Route path="/auth" element={<AuthPage/>} />
        
        <Route path="/game/:game" element={<GamePage gamesList={gamesList}/>} />
        <Route path="/filter/:genre" element={<GenrePage gamesList={gamesList}/>} />
        <Route path="/search/:itemSearch" element={<SearchPage gamesList={gamesList}/>} />
      </Routes>
      
    </Container>
  );
};

export default App;