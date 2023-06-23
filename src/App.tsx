import { Container } from './appStyle';
import { Routes,Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { AuthPage } from './routes/authentication';
import { HomePage } from './routes/home';
import { GamePage } from './routes/game-page';
import { useSelector } from 'react-redux';
import { rootState } from './redux/store';
import { useState } from 'react';


const App = () => {
 
  const {currentUser} = useSelector((state:rootState)=>state.auth)
  const[toggle,setToggle]=useState<boolean>(false);
  const toggleFunc=(toggle:boolean)=>setToggle(!toggle);
  return (
    <Container>
      {
        currentUser 
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