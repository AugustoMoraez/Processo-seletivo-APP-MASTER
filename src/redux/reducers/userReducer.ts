import { createSlice } from '@reduxjs/toolkit';
import { ItemGameList } from '../../types/ItemGameList';
import getUserListGames from '../../helpers/getUserListGames';
import getTokenUser from '../../helpers/getTokenUser';



const slice = createSlice({
  name: 'user',
  initialState: {
    token: getTokenUser()  ,
    userGamesList: getUserListGames()
  },
  reducers: {
    setCurrentUser: (state, action) => {
      if(action.payload === null){
        localStorage.removeItem("userGameList");
        localStorage.setItem("token", JSON.stringify(action.payload));
        
      }else{
        localStorage.setItem("token", JSON.stringify(action.payload));
      }
      return {...state,  token:action.payload}
    },
    setGameList: (state, action) => {

      let list: ItemGameList[] = getUserListGames()
      let itemPayload: ItemGameList = action.payload
      if(itemPayload.favorite){
        console.log("item com coração")
      }else{
        if (list.some((item) => item.game.id === itemPayload.game.id)) {
          if(itemPayload.stars === undefined){
            let newList = list.filter((item)=>item.game.id !== itemPayload.game.id)
            localStorage.setItem("userGameList", JSON.stringify(newList));
          }else{
            let newList = list.filter((item)=>item.game.id !== itemPayload.game.id)
            newList.push(itemPayload)
            localStorage.setItem("userGameList", JSON.stringify(newList));
          }
        } else { 
          list.push(itemPayload);
          localStorage.setItem("userGameList", JSON.stringify(list));
        }
      }
      return state
    }
  }
})

export const { setCurrentUser, setGameList } = slice.actions
export default slice.reducer
