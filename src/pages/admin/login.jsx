import React, { useState } from 'react'
import axiosInstance from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../../store/slice/admin'

function Login() {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const confirmLogin = ()=>{
    if(name.trim().length==0||password.trim().length==0){
      setErr('Fill all the fields')
    }else{
      axiosInstance.post('/admin/login',{name,password}).then(res=>{
        console.log(res.data);
        const name = res?.data?.admin?.name
        const role = 'admin'
        const token = res?.data?.token
        dispatch(adminLogin({name,role,token}))
        navigate('/admin/userData') 
      })
    }
  }

  return (
    <div className="">
    <div>
      <div className="">
        <label>name </label>
        <input type="text" onChange={(e)=>setName(e.target.value)} name="uname" required />
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