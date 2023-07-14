import { Routes,Route } from 'react-router-dom';
import {AuthPage} from './auth';
import { HomePage } from './home';
import { GenrePage } from './genero';
import { GamePage } from './game-page';
import {SearchPage} from './search';
import { FavoritesPage } from './favorites';
//types
import { dataCard } from '../types/dataCard';

type prop = {
    gamesList:dataCard[],
    listUserGames:dataCard[]
}

export const RouteList = ({gamesList,listUserGames}:prop) => {
    return(
        <Routes>
        <Route path="/" element={<HomePage gamesList={ gamesList }  />} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/favorites" element={<FavoritesPage gamesList={listUserGames}/>} />
        <Route path="/game/:game" element={<GamePage gamesList={gamesList }/>} />
        <Route path="/filter/:genre" element={<GenrePage gamesList={gamesList  }/>} />
        <Route path="/search/:itemSearch" element={<SearchPage gamesList={ gamesList }/>} />
      </Routes>
    )
}