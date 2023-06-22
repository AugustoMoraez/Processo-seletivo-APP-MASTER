import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name:"authenticate",
    initialState:{
        currentUser:false,
        gameList:[]
    },
    reducers:{
        setAuth:(state,action)=>{
            state.currentUser = action.payload;
        },
        setGameList:(state,action)=>{
            state.gameList = action.payload;
            console.log(state.gameList)
        }
    }
});

export const{setAuth,setGameList}= slice.actions;
export default slice.reducer;
