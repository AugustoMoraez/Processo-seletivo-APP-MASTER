export const getUserListGames = ():any => {
    let dataJSON:string | null = localStorage.getItem("userGameList");
    
    let data = dataJSON !== null ? JSON.parse(dataJSON) : [];
    
    return data;
   
}
export default getUserListGames;