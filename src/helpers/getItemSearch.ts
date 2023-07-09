import { ItemGameList } from "../types/ItemGameList";

export const getItemSearch = (gameName:string,games:ItemGameList[]) => {
    const resultGames = games.filter((item)=>item.game.title.toLocaleLowerCase().indexOf(gameName.toLocaleLowerCase()) > -1)
    return resultGames;
}