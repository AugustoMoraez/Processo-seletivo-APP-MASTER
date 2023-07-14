import { dataCard } from "../types/dataCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

/*
    Função recebe a lista de jogos da api APP MASTERS
    e substitui os itens por itens que possuem uma avaliação
    vindo da API do firebase
*/

const generateUserList = (list:dataCard[]):dataCard[] => {
    const editList = () => {
        const {token,userGamesList}=useSelector((state:RootState)=>state.user)
        const gamesUser:dataCard[] = userGamesList
        let newList:dataCard[] = []
        if(token){
            newList = list.filter((item)=>!gamesUser.some((item2)=>item2.game.id === item.game.id) )
            userGamesList.map((item)=>{
                newList.push(item)
            })
            newList.sort((a,b)=>a.id > b.id ? 1 : -1) 
            return newList
        }
        return list
           
    }
    return editList();


}
export default generateUserList;
