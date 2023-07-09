import { useQuery } from "react-query";
import fetchData from "./fetchData";
import { dataFetch } from "../types/dataFetch";
import { AxiosError } from "axios";
import { ItemGameList } from "../types/ItemGameList";


const useCustomQuery = ():dataFetch => {
    const fetch = () => {
        const{data,isLoading,error} =  useQuery("api-data",()=>fetchData(),
        {retry:1});
        const Error = error as AxiosError

        const listGames:ItemGameList[] = [];

        data?.map(item=>{
            listGames.push({
                game:item,
                favorite:false,
                stars:undefined,
                inFavoriteList:false
            })
        })

        return {listGames,isLoading,Error};
    }
    return fetch();
}

export default useCustomQuery;