import { ItemGameList } from "../types/ItemGameList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const generateUserList = (list:ItemGameList[]):ItemGameList[] => {
    const editList = () => {
        const userGamesList:ItemGameList[]=useSelector((state:RootState)=>state.user.userGamesList)
        let newList:ItemGameList[] = []
        
        
        newList = list.filter((item)=>!userGamesList.some((item2)=>item2.game.id === item.game.id));
        userGamesList.map((item)=>{
            newList.push(item)
        })
       
        newList.sort((a,b)=>a.game.title > b.game.title ? 1 : -1)
        
        return newList
           
    }
    return editList();


}
export default generateUserList;
