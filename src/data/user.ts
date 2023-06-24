import { user } from "../types/user";

const getLocalStorage = (key:string) => {
    
    let dataJSON:string | null = localStorage.getItem(key);

    let data = dataJSON !== null ? JSON.parse(dataJSON):
            {tokenAcess: false,email: ""};
    
    return data
   
}

export const getUser:user = getLocalStorage("user");