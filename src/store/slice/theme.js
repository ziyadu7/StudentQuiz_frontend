import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    theme:'dark'
}

export const theme = createSlice({
    name:'themeChange',
    initialState,
    reducers:{
        themeChange:(state,action)=>{
            state.theme = action.payload.theme
        }
    }
})

export const { themeChange } = theme.actions;
export default theme.reducer;