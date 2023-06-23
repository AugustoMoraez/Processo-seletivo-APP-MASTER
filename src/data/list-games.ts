import { rootState } from '../redux/store';
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import fetchData from "../api/fetchData";
import { game } from '../types/game';

type prop = { data: game[] | undefined; isLoading: boolean; isError: boolean; }

const ListGames = ():prop => {
    const fetch = () => {
        let request = {}
        const{email}= useSelector((state:rootState)=> state.authenticate);
        const{data,isLoading,isError} = useQuery("api-data",()=>fetchData(email),{retry: false});
        return request={data,isLoading,isError};
    }
    
    return fetch();
}



export default ListGames;