import { createSlice } from '@reduxjs/toolkit';
import getTokenUser from '../../helpers/getTokenUser';

const slice = createSlice({
  name: 'user',
  initialState:{
    token:getTokenUser("token")
  },
  reducers: {
    setCurrentUser: (state,action) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {...state,  token:action.payload}
    }
  }
})

export const{setCurrentUser} = slice.actions
export default slice.reducer
