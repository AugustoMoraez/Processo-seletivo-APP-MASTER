import { dataCard } from "../types/dataCard";

/*
    seleciona os itens que devem ser exibidos
    com base no parametro de pesquisa.
*/


export const getItemSearch = (gameName:string,games:dataCard[]) => {
    const resultGames = games.filter((item)=>item.game.title.toLocaleLowerCase().indexOf(gameName.toLocaleLowerCase()) > -1)
    return resultGames;
}