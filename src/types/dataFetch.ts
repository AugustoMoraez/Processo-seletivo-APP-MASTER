import { AxiosError } from "axios"
import {ItemGameList} from "./ItemGameList"

export type dataFetch = {
    listGames:ItemGameList[]|undefined,
    isLoading:boolean,
    Error: AxiosError<unknown, any> | null
}