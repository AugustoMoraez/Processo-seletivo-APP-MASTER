import { createSlice } from "@reduxjs/toolkit";




const slice = createSlice({
    name:"authenticate",
    initialState:{
        list:[]
    },
    reducers:{
        setFilter:(state,action)=>{
            
        },
        
    }
});

export const{setFilter}= slice.actions;
export default slice.reducer;
