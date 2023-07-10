import { createSlice } from '@reduxjs/toolkit';
import getLocalStorage from '../../helpers/getLocalStorage';
import { ItemGameList } from '../../types/ItemGameList';




const slice = createSlice({
  name: 'user',
  initialState: {
    token: getLocalStorage("token"),
    userGamesList: getLocalStorage("userGameList")
  },
  reducers: {
    setCurrentUser: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      return state
    },
    setGameList: (state, action) => {

      let list: ItemGameList[] = getLocalStorage("userGameList")
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
