import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Register from '../pages/student/Register'
import Questions from '../pages/student/questions'
import Login from '../pages/student/login'
import { useSelector } from 'react-redux'

function StudentRouter() {

  const {studentId} = useSelector((state)=>state?.Student)
  console.log(studentId);
  return (
    <Routes>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/questions' element = {studentId ?<Questions/>:<Login/>}/>
    </Routes>
  )
}

export default StudentRouter