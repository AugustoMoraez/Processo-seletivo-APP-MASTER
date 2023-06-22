import axios from "axios";
import { useEffect, useState } from "react";
import { game } from "../types/game";

export const getData = async () => {
    const [list, setList] = useState<game[]>([]);
    const [load, setLoad] = useState(true);
    const [err, setErr] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try{
            const headers = {
            'dev-email-address': 'moraezaugusto@gmail.com', // Substitua pelo seu endereço de e-mail
            };
            const link:string= "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/"
            const response = await axios.get(link, { headers });
            
            setList(response.data);
            setLoad(false);
            console.log(list);
        }catch(error){
            setLoad(false);
            setErr(true);
            console.error("erro detectado:"+error);
        }
        };
        fetchData();
    }, []);
    return  {list,load,err};
    
}