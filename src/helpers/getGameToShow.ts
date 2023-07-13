import { ItemGameList } from "../types/dataCard";

export const getGameToShow = (games:ItemGameList[],gameName:string) => {

    const filter:ItemGameList[] = games.filter((item)=> item.game.title.toLowerCase()  === gameName.toLowerCase());
    const game:ItemGameList = filter[0];

    return game
}