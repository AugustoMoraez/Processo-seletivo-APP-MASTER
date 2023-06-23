import { Container } from './appStyle';
import { Routes,Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { AuthPage } from './routes/auth';
import { HomePage } from './routes/home';
import { GamePage } from './routes/gamePage';
import { useSelector } from 'react-redux';
import { rootState } from './redux/store';
import { useState } from 'react';


const App = () => {
 
  const {currentUser} = useSelector((state:rootState)=>state.auth)
  const[toggleMenu,setToggleMenu]=useState<boolean>(false);
  const toggleFunc=(toggleMenu:boolean)=>setToggleMenu(!toggleMenu);
  return (
    <Container>
      {
        currentUser 
        ?
          <>
            <Header  toggleFunc={()=>toggleFunc(toggleMenu)} />

            <Aside 
            toggleMenu={toggleMenu} 
            toggleFunc={()=>toggleFunc(toggleMenu)} 
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