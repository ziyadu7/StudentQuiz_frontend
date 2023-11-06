
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    name:null,
    role:null,
    token:null,
    studentId:null,
    isAttend:false,
    mark:0
}

export const student = createSlice({
    name:'studentAuth',
    initialState,
    reducers:{
        studentLogin:(state,action)=>{
            state.name = action.payload.name,
            state.token = action.payload.token,
            state.role = action.payload.role,
            state.studentId = action.payload.studentId,
            state.mark = action.payload.mark
            state.isAttend = action.payload.isAttend
        },
        questionSubmition:(state,action)=>{
            state.isAttend = action.payload.isAttend,
            state.mark = action.payload.mark
        },
        studentLogout:(state,action)=>{
            state.name = null,
            state.token = null,
            state.role = null,
            state.studentId = null
        }
    }
})

export const { studentLogin,studentLogout,questionSubmition } = student.actions;
export default student.reducer;