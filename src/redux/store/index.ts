import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";

// store

const store = configureStore({
    reducer: {
        user: authReducer,
    }
})

export default store;