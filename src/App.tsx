//components
import { Container } from './appStyle';
import { Header } from './components/header';
import { Aside } from './components/Aside';
//pages
import { AuthPage } from './routes/authentication';
import { HomePage } from './routes/home';
import { GamePage } from './routes/game-page';
//libs
import { Routes,Route } from 'react-router-dom';
//hooks
import { useSelector } from 'react-redux';
import { useState } from 'react';
//types 
import { rootState } from './redux/store';


const App = () => {
 
  const {tokenAcess} = useSelector((state:rootState)=>state.authenticate)
  const[toggle,setToggle]=useState<boolean>(false);
  const toggleFunc=(toggle:boolean)=>setToggle(!toggle);
  return (
    <Container>
      {
        tokenAcess 
        ?
          <>
            <Header  toggleFunc={()=>toggleFunc(toggle)} />

            <Aside 
            toggle={toggle} 
            toggleFunc={()=>toggleFunc(toggle)} 
            />

            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/game/:slug" element={<GamePage/>} />
            </Routes>
          </>  
        :
          <AuthPage/>
      }
    </Container>
  );
};

export default App;