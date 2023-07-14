import { createSlice } from '@reduxjs/toolkit';
import getTokenUser from '../helpers/getTokenUser';
import { dataCard } from '../types/dataCard';
import { db } from '../services/firebaseConfig';
import { doc,deleteDoc,setDoc } from 'firebase/firestore';



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
      const itemPayload:dataCard = action.payload;
      const userGamesList:dataCard[] = JSON.parse(localStorage.getItem("ListGames") as string)
      
      if(userGamesList.some(item => item.game.id === itemPayload.game.id)){
        if(itemPayload.favorite === false  && itemPayload.stars === "undefined"){
          const remove = async () => {
            await deleteDoc(doc(db, "favorite-game", itemPayload.id))
          } 
          remove();
        }else{
          const edit = async () => {
            await setDoc(doc(db, "favorite-game", itemPayload.id),itemPayload)
          } 
          edit();
        }
      }else{
        const add = async () => {
          await setDoc(doc(db, "favorite-game", itemPayload.id),itemPayload)
        } 
        add();
      }
      return state;
    }
    
  }
})

export const { setCurrentUser, setInUserGamesList,setUserGamesList} = slice.actions
export default slice.reducer
