import { useQuery } from "react-query";
import fetchData from "./fetchData";
import { dataFetch } from "../types/dataFetch";
import { AxiosError } from "axios";


const useCustomQuery = ():dataFetch => {
    const fetch = () => {
        const{data,isLoading,isError,error} =  useQuery("api-data",()=>fetchData(),
        {retry:1});
        const Error = error as AxiosError
        return {data,isLoading,isError,Error};
    }
    return fetch();
}

export default useCustomQuery;