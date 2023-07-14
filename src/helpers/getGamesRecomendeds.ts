import { dataCard } from "../types/dataCard";

/*
    Gera a lista de jogos recomendados da pagina game-page
    selecionando os 3 primeiros jogos do mesmo genero que o
    jogo em exibição.
*/


export const getGamesRecomendeds = (game:dataCard,games:dataCard[]) => {
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