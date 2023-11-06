import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Register from '../pages/student/Register'
import Questions from '../pages/student/questions'
import Login from '../pages/student/login'
import { useSelector } from 'react-redux'
import NotFound from '../pages/notFound'

function StudentRouter() {

  const {studentId} = useSelector((state)=>state?.Student)

  return (
    <Routes>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {studentId ? <Questions/>:<Login/>}/>
        <Route path='/questions' element = {studentId ? <Questions/>:<Login/>}/>
        <Route path='/*' element = {<NotFound/>}/>
    </Routes>
  )
}

export default StudentRouter