import { Container } from './appStyle';
import { Routes,Route } from 'react-router-dom';
import { Header } from './components/header';
import { AuthPage } from './routes/Auth';
import { HomePage } from './routes/home';
import { GamePage } from './routes/gamePage';
import { useSelector } from 'react-redux';
import { rootState } from './redux/store';


const App = () => {
 
  const {currentUser} = useSelector((state:rootState)=>state.auth)
  
  return (
    <Container>
      {
        currentUser 
        ?
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