import useCustomQuery from "../services/useCustomQuery";
import { game } from "../types/game";


const getData = () => {
    console.log("ola")
    const {data} =  useCustomQuery();
    let list:game[] = [];
    if(data){ 
        console.log("increment")
        list =  data.data;
    }
    console.log("finalizo:"+list)
    return list
}

export default getData;