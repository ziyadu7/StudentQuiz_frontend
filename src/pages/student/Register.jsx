import axios from 'axios'
import React, { useState } from 'react'
import axiosInstance from '../../api/axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
  const navigate = useNavigate()

  const confirmRegister = ()=>{
    if(userName.trim().length == 0||password.trim().length==0){
      setErr('Fill all the fields')
    }else{
      setErr('')
      axiosInstance.post('/student/register',{userName,password}).then((res)=>{
        console.log(res.data);
        navigate('/student/login')
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
        <button onClick={()=>confirmRegister()} type="button" >Submit</button>
      </div>
    </div>
  </div>
  )
}

export default Register