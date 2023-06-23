
import axios from 'axios';
import { game } from '../types/game';

export const api = axios.create({
    baseURL: 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/',
    timeout: 5000,
}); 

const fetchData = async (email:string): Promise<game[]> => {
    
    const response = await api.get<game[]>("/data/",{
        headers: {"dev-email-address":email}
    });

    return response.data

};



export default fetchData;