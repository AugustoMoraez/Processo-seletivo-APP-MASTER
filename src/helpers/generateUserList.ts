import { ItemGameList } from "../types/ItemGameList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const generateUserList = (list:ItemGameList[]):ItemGameList[] => {
    const editList = () => {
        const {token,userGamesList}=useSelector((state:RootState)=>state.user)
        const gamesUser:ItemGameList[] = userGamesList
        let newList:ItemGameList[] = []
        if(token){
            newList = list.filter((item)=>!gamesUser.some((item2)=>item2.game.id === item.game.id) )
            userGamesList.map((item)=>{
                newList.push(item)
            })
            newList.sort((a,b)=>a.game.title > b.game.title ? 1: -1)
            return newList
        }
        return list
           
    }
    return editList();


}
export default generateUserList;
