import { AxiosError } from "axios"
import {dataCard} from "./dataCard"

export type dataFetch = {
    listGames:dataCard[]|undefined,
    isLoading:boolean,
    Error: AxiosError<unknown, any> | null
}