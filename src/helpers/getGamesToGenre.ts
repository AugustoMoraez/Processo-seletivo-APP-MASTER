import { ItemGameList } from "../types/dataCard";

export const getGamesToGenre = (gamesList:ItemGameList[],genre:string) => {
    let games:ItemGameList[]  = gamesList.filter(item=> item.game.genre === genre)
    return games
}