import { useQuery, UseQueryResult } from 'react-query';
import { AxiosResponse } from 'axios';
import { game } from '../types/game';
import fetchData from './fetchData';


const useCustomQuery = (): UseQueryResult<AxiosResponse<game[]>> => {
    return useQuery<AxiosResponse<game[]>>('fetch', fetchData);
};
export default useCustomQuery;