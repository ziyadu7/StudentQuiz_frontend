import axios from 'axios'
import React, { useState } from 'react'
import axiosInstance from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { studentLogin } from '../../store/slice/student'

function Login() {
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const confirmLogin = ()=>{
    if(userName.trim().length == 0||password.trim().length==0){
      setErr('Fill all the fields')
    }else{
      setErr('')
      axiosInstance.post('/student/login',{userName,password}).then((res)=>{
        console.log(res.data);
          const name = res?.data?.student?.userName
          const token = res?.data?.token
          const role = res?.data?.role
          const studentId = res?.data?.student?._id
          dispatch(studentLogin({ name, token, role, studentId }))
          navigate('/student/questions')
      }).catch((err)=>{
        console.log(err);
        setErr(err?.response?.data?.errMsg)
      })
    }
  }
  return (
    <div className="">
    <div>
      <div className="">
        <label>Username </label>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} name="uname" required />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="pass" required />
      </div>
      <small>{err}</small>
      <div className="button-container">
      <button onClick={()=>confirmLogin()} type="button" >Submit</button>
      </div>
    </div>
  </div>
  )
}

export default Login