import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "../features/repos/reposSlice";

export const store = configureStore({
    reducer: {
        repos: reposReducer,
    }
})