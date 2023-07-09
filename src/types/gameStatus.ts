import { game } from "./game"


export type gameDataAndStatus = {
    game:game,
    favorite:boolean,
    avaliation:[number,number,number,number]
}