import { game } from "../types/game"

export const getGamesRecomendeds = (game:game,games:game[]) => {
    let gameArray = [];
    let filter = games.filter((item)=>item.genre === game.genre 
              && item.title.toLowerCase() !== game.title.toLowerCase());
    for(let  i = 0;i<3;i++){
        if(filter[i]){
            gameArray.push(filter[i])
        }
    }
    return gameArray;
}