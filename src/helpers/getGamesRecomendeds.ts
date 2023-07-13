import { ItemGameList } from "../types/dataCard";


export const getGamesRecomendeds = (game:ItemGameList,games:ItemGameList[]) => {
    let gameArray = [];
    let filter = games.filter((item)=>item.game.genre === game.game.genre 
              && item.game.title.toLowerCase() !== game.game.title.toLowerCase());
    for(let  i = 0;i<3;i++){
        if(filter[i]){
            gameArray.push(filter[i])
        }
    }
    return gameArray;
}