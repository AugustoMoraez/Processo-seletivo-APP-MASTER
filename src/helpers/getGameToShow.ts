import { dataCard } from "../types/dataCard";

export const getGameToShow = (games:dataCard[],gameName:string) => {

    const filter:dataCard[] = games.filter((item)=> item.game.title.toLowerCase()  === gameName.toLowerCase());
    const game:dataCard = filter[0];

    return game
}