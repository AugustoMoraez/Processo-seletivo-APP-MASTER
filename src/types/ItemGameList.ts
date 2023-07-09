import { game } from "./game"


export type ItemGameList = {
    game:game,
    favorite?:boolean,
    stars?:number|undefined,
    inFavoriteList:boolean
}