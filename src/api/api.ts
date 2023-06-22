import axios from "axios";
import { useEffect, useState } from "react";
import { game } from "../types/game";

export const getData = async (email:string) => {
    const [list, setList] = useState<game[]>([]);
    const [load, setLoad] = useState(true);
    const [err, setErr] = useState(false);
    const link:string= "https://games-test-api-81e9fb0d564a.herokuapp.com/api";
    const key:string= "/data/";

    useEffect(() => {
        const fetchData = async () => {
        try{
            const headers = {
            'dev-email-address': `${email}`
            };
            const response = await axios.get(link+key, { headers });
            
            setList(response.data);
            setLoad(false);
            console.log("deu certo:");
        }catch(error){
            setLoad(false);
            setErr(true);
            console.error("erro detectado:"+error);
        }
        };
        fetchData();
    }, []);
    console.log(list,load,err);
    return  {list,load,err};
    
}