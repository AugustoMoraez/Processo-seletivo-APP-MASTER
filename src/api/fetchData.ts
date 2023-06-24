
import axios from 'axios';
import { game } from '../types/game';

export const api = axios.create({
    baseURL: 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/',
    timeout: 5000,
    headers: {"dev-email-address":"moraezaugusto@gmail.com"}
}); 

const fetchData = async (): Promise<game[]> => {
    
    const response = await api.get<game[]>("/data/");

    return response.data

};



export default fetchData;