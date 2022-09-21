import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {INews} from "../../pages/News/types";
import axios from "axios";

const newsInitialState: INews = {
    news: [],
    isLoading: false,
    error: '',
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get(`https://631a728bfae3df4dcfe6211f.mockapi.io/news`)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to load page :(")
        }
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.news = action.payload
        })
            .addCase(fetchNews.pending,(state) => {
                state.isLoading = true
            })
            .addCase(fetchNews.rejected, (state, action)=> {
                state.isLoading = false
                // @ts-ignore
                state.error = action.payload
            })
    },
})

export default newsSlice.reducer