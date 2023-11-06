import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Login from '../pages/admin/login'
import AddQuestions from '../pages/admin/addQuestions'
import UserData from '../pages/admin/userData'
import { useSelector } from 'react-redux'

function AdminRoute() {

  const {token} = useSelector((state)=>state?.Admin)
  return (
    <Routes>
    <Route path='/login' element = {token?<AddQuestions/>:<Login/>}/>
    <Route path='/addQuestions' element = {token?<AddQuestions/>:<Login/>}/>
    <Route path='/userData' element = {token?<UserData/>:<Login/>}/>
    </Routes>
  )
}

export default AdminRoute