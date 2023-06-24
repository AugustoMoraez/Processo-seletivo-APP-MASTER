import { AxiosError } from "axios"
import { game } from "./game"

export type dataFetch = {
    data:game[]|undefined,
    isLoading:boolean,
    isError:boolean,
    Error: AxiosError<unknown, any> | null
}