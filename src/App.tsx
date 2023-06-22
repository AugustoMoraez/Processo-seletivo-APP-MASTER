import { Container } from './appStyle';
import { Routes,Route } from 'react-router-dom';
import { Header } from './components/header';
import { AuthPage } from './routes/Auth';
import { HomePage } from './routes/home';
import { GamePage } from './routes/gamePage';
import { useState } from 'react';

const App = () => {
  const[userCurrent,setUserCurrent] = useState(false);
  return (
    <Container>
      {
        userCurrent?
          <>
            <Header/>
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