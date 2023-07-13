import { dataCard } from "../types/dataCard";

export const getGamesToGenre = (gamesList:dataCard[],genre:string) => {
    let games:dataCard[]  = gamesList.filter(item=> item.game.genre === genre)
    return games
}