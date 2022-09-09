import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {IUsers} from "../../pages/Users/types";
import axios from "axios";

const usersInitialState: IUsers = {
    users: []
}

export const fetchUser = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const {data} = await axios.get(`https://631a728bfae3df4dcfe6211f.mockapi.io/users`)
        // console.log(data)
        return data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
            // console.log(action.payload)
        })
    },
})

export const { getUsers } = usersSlice.actions
export default usersSlice.reducer