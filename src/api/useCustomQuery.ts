import { rootState } from '../redux/store';
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import fetchData from "./fetchData";
import { game } from '../types/game';

export type data = { data: game[] | undefined; isLoading: boolean; isError: boolean; }

const useCustomQuery = ():data => {
    const fetch = () => {
        
        const{email}= useSelector((state:rootState)=> state.authenticate);
        const{data,isLoading,isError} = useQuery("api-data",()=>fetchData(email),{retry:false});

        return {data,isLoading,isError};
    }
    return fetch();
}

export default useCustomQuery;