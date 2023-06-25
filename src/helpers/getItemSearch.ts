import { game } from "../types/game";


export const getItemSearch = (gameName:string,games:game[]) => {
    const resultGames = games.filter((item)=>item.title.toLocaleLowerCase().indexOf(gameName.toLocaleLowerCase()) > -1)
    return resultGames;
}