import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    repos: [],
    isLoading: false,
    isError: false,
}

const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {
        
    },
    extraReducers(builder){
        
    }
})

export default reposSlice.reducers