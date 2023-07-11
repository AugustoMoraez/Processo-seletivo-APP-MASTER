import { createSlice } from '@reduxjs/toolkit';
import getTokenUser from '../../helpers/getTokenUser';
import { ItemGameList } from '../../types/ItemGameList';
import { store } from '../../services/firebaseConfig';
import { addDoc } from 'firebase/firestore';



const slice = createSlice({
  name: 'user',
  initialState: {
    token: getTokenUser(),
    userGamesList:[]
  },
  reducers: {
    setCurrentUser: (state, action) => {
      
      if (action.payload === null) {
        localStorage.removeItem("ListGames");
        localStorage.setItem("token", JSON.stringify(action.payload));
      } else {
        localStorage.setItem("token", JSON.stringify(action.payload));
      }
      return { ...state, token: action.payload }
    },
    setUserGamesList: (state, action) => {
      return{...state,userGamesList:action.payload}
    },
    setInUserGamesList:   (state, action)=>{
      const itemPayload:ItemGameList = action.payload;
      const userGamesList:ItemGameList[] = JSON.parse(localStorage.getItem("ListGames") as string)
      
      if(userGamesList.some(item => item.game.id === itemPayload.game.id)){
        console.log("na lista")
      }else{
        const add = async () => {
          await addDoc(store,itemPayload)
          console.log("adicionado com sucesso")
        } 
        add();
      }


    }
    
  }
})

export const { setCurrentUser, setInUserGamesList,setUserGamesList} = slice.actions
export default slice.reducer
