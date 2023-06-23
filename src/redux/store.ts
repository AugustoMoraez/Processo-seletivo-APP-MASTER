import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authenticateReducer/authReducer";


export const store = configureStore({
    reducer:{
        authenticate:authReducer        
    }
})

export type rootState = ReturnType<typeof store.getState>