export const getLocalStorage = (key:string):any => {
    let dataJSON:string | null = localStorage.getItem(key);
    
    let data = dataJSON !== null ? JSON.parse(dataJSON) : [];
    
    return data;
   
}
export default getLocalStorage;