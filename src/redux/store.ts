import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authReducer";


export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})

export type rootState = ReturnType<typeof store.getState>