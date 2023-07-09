import { game } from "./game"


export type ItemGameList = {
    game:game,
    favorite?:boolean,
    avaliation?:number|undefined
}