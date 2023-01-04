import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    search: "",
    repos: [],
    isLoading: false,
    isError: false,
}

export const fetchRepository = createAsyncThunk("repos/fetchRepository", async(params, thunkAPI) => {
    try{
        const result = await axios.get(`https://api.github.com/users/${search}/repos`)
        return result.data;
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {
        setSearch(state, search){
            state.search = search.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchRepository.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(fetchRepository.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.repos = action.payload;
        })
        builder.addCase(fetchRepository.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export const { setSearch } = reposSlice.actions;
export default reposSlice.reducer;