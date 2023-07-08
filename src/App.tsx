//components
import { Container } from './appStyle';
import { Header } from './components/header';
import { Aside } from './components/Aside';
import { Load } from './components/Loader';
import { ErroMessage } from './components/ErrorMsg';
//pages
import { LoginPage } from './routes/auth/login';
import { RegisterPage } from './routes/auth/register';
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
  const{data,isLoading,Error}=useCustomQuery();
  const games = data ? data : [];
  
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
        <Route path="/" element={<HomePage games={games} />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/game/:game" element={<GamePage games={games}/>} />
        <Route path="/filter/:genre" element={<GenrePage games={games}/>} />
        <Route path="/search/:itemSearch" element={<SearchPage games={games}/>} />
      </Routes>
    </Container>
  );
};

export default App;