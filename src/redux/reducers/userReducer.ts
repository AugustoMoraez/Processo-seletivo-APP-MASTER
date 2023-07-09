import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState:{
    token:null
  },
  reducers: {
    setCurrentUser: (state,action) => {
      return {...state,  token:action.payload}
    }
  }
})

export const{setCurrentUser} = slice.actions
export default slice.reducer
