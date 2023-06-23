
import axios, { AxiosResponse } from 'axios';
import { rootState } from '../redux/store';
import { useSelector } from "react-redux";
import { game } from '../types/game';

const fetchData = async (): Promise<AxiosResponse<game[]>> => {

    const {email} = useSelector((state:rootState)=>state.auth);
    
    const api = axios.create({
        baseURL: 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/',
        headers: {"dev-email-address":email},
    });  

    const response = await api.get<game[]>('/data/');
    return response;
};



export default fetchData;