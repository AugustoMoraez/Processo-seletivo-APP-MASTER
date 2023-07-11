import { createSlice } from '@reduxjs/toolkit';
import getTokenUser from '../../helpers/getTokenUser';



const slice = createSlice({
  name: 'user',
  initialState: {
    token: getTokenUser(),
    userGamesList:[]
  },
  reducers: {
    setCurrentUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("userGameList");
        localStorage.setItem("token", JSON.stringify(action.payload));

      } else {
        localStorage.setItem("token", JSON.stringify(action.payload));
      }
      return { ...state, token: action.payload }
    },
    setInFavoriteList: (state, action) => {
      return{...state,userGamesList:action.payload}
    }
    
  }
})

export const { setCurrentUser, setInFavoriteList} = slice.actions
export default slice.reducer
