import { game } from "../types/game"

export const getGameToShow = (games:game[],gameName:string) => {
    const filter:game[] = games.filter((item)=> item.title.toLowerCase()  === gameName.toLowerCase());
    const game:game = filter[0];

    return game
}