import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name:"authenticate",
    initialState:{
        currentUser:true,
        email:"moraezaugusto@gmail.com",
        
    },
    reducers:{
        setUser:(state,action)=>{
            state.email = action.payload.email;
            state.currentUser = true;
        },
        
    }
});

export const{setUser}= slice.actions;
export default slice.reducer;
