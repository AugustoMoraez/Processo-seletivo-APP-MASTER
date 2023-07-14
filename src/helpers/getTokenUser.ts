
/*
    Busca no local storage se ha um token de usuario caso nao tenha retorna null
*/


export const getTokenUser = ():any => {
    let dataJSON:string | null = localStorage.getItem("token");
    
    let data = dataJSON !== null ? JSON.parse(dataJSON) : null;
    
    return data;
   
}
export default getTokenUser;