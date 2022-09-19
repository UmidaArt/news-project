import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {INews} from "../../pages/News/types";
import axios from "axios";

const newsInitialState: INews = {
    news: [],

}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (thunkAPI) => {
        const {data} = await axios.get(`https://631a728bfae3df4dcfe6211f.mockapi.io/news`)
        return data
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers: {
        getNews: (state, action) => {
            state.news = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
    },
})

export const { getNews } = newsSlice.actions
export default newsSlice.reducer