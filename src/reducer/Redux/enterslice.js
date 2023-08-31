import {createSlice} from '@reduxjs/toolkit'

export const display = createSlice({
    name:"user",
    initialState:{
        username:"",
        password:"",
    },
    reducers:{
        login: (state, action) =>{
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
})
 export const{login} = display.actions;
 export default display.reducer;