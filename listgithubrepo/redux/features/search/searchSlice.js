import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    isLoading: false,
    isError: false,
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        
    },
    extraReducers(builder){
        
    }
})

export default searchSlice.reducers