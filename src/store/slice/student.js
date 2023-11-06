
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    name:null,
    role:null,
    token:null,
    studentId:null
}

export const student = createSlice({
    name:'studentAuth',
    initialState,
    reducers:{
        studentLogin:(state,action)=>{
            state.name = action.payload.name,
            state.token = action.payload.token,
            state.role = action.payload.role
            state.studentId = action.payload.studentId
        },
        studentLogout:(state,action)=>{
            state.name = null,
            state.token = null,
            state.role = null,
            state.studentId = null
        }
    }
})

export const { studentLogin,studentLogout } = student.actions;
export default student.reducer;