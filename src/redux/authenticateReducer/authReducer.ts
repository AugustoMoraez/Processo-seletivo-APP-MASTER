import { createSlice } from "@reduxjs/toolkit";
import {getUser} from "../../data/user"




const slice = createSlice({
    name:"authenticate",
    initialState:{
        tokenAcess: getUser.tokenAcess,
        email: getUser.email,
        
    },
    reducers:{
        setUser:(state,action)=>{
            state.email = action.payload.email;
            state.tokenAcess = true;
            localStorage.setItem("user", JSON.stringify(state));
        },
        
    }
});

export const{setUser}= slice.actions;
export default slice.reducer;
