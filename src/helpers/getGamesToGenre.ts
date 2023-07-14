import { dataCard } from "../types/dataCard";

/*
    Filtrar a lista de todos os jogos com base em um genero
*/


export const getGamesToGenre = (gamesList:dataCard[],genre:string) => {
    let games:dataCard[]  = gamesList.filter(item=> item.game.genre === genre)
    return games
}