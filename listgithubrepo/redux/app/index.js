import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "../features/repos/reposSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
    reducer: {
        repos: reposReducer,
        search: searchReducer,
    }
})