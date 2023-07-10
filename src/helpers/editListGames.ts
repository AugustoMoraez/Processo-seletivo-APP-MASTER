import { ItemGameList } from "../types/ItemGameList";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const editListGames = (list:ItemGameList[]) => {
    const editList = () => {
        const userGamesList:ItemGameList[] = useSelector((state:RootState)=>state.user.userGamesList);
        let editList:ItemGameList[] = list.filter((item)=> !userGamesList.includes(item))

        return editList;
        

    }
    return editList();


}

export default editListGames;