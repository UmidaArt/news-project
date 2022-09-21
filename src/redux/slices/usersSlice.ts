import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {IUsers} from "../../pages/Users/types";
import axios from "axios";

const usersInitialState: IUsers = {
    users: [],
    isLoading: false,
    error: '',
}

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get(`https://631a728bfae3df4dcfe6211f.mockapi.io/users`)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to load page :(")
        }
    }
)

export const addUser = createAsyncThunk(
    "users/addUser",
    async (value) => {
        const {data} = await axios.post ("https://631a728bfae3df4dcfe6211f.mockapi.io/users", value)
        console.log(data)
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.users = action.payload
            })
            .addCase(fetchUser.pending,(state) => {
                state.isLoading = true
            })
            .addCase(fetchUser.rejected, (state, action)=> {
                state.isLoading = false
                // @ts-ignore
                state.error = action.payload
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                // @ts-ignore
                state.users.push(action.payload)
        })
            .addCase(addUser.pending,(state) => {
                state.isLoading = true
            })
            .addCase(addUser.rejected, (state, action)=> {
                state.isLoading = false
                // @ts-ignore
                state.error = action.payload
            })
    }
})

export default usersSlice.reducer
