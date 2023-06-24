//components
import { Container } from './appStyle';
import { Header } from './components/header';
import { Aside } from './components/Aside';
import { Load } from './components/Loader';
import { ErrMessage } from './components/ErrorMsg';
//pages
import { HomePage } from './routes/home';
import { GenrePage } from './routes/genero-filter';
import { GamePage } from './routes/game-page';
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
  
  return (
    <Container> 
      {isLoading
      ?
        <Load/>
      :
      Error
      ?
      <ErrMessage Error={Error}/>
      :
      <>
        <Header  toggleFunc={()=>toggleFunc(toggle)} />
        <Aside 
        toggle={toggle} 
        toggleFunc={()=>toggleFunc(toggle)} 
        />
        <Routes>
          <Route path="/" element={<HomePage games={games} />} />
          <Route path="/game/:game" element={<GamePage games={games}/>} />
          <Route path="/filter/:genre" element={<GenrePage games={games}/>} />
        </Routes>
        </>
      }
    </Container>
  );
};

export default App;