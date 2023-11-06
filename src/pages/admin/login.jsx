import React, { useState } from 'react'
import axiosInstance from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../../store/slice/admin'
import { toast } from 'react-hot-toast'

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
        const name = res?.data?.admin?.name
        const role = 'admin'
        const token = res?.data?.token
        dispatch(adminLogin({name,role,token}))
        navigate('/admin/userData') 
      }).catch((err)=>{
        if(err?.response){
          toast.error(err?.response?.data?.errMsg)
        }
      })
    }
  }

  return (
    <div className="">
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Admin Login</h1>

                        <input
                            type="text"
                            onChange={(e)=>setName(e.target.value)}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Name"
                            placeholder="Name" />

                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <div className='felx justify-center'>
                          <small className='text-red-600'>{err}</small>
                        </div>
                        <button
                            type="button"
                            onClick={()=>confirmLogin()}
                            className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Login Account</button>

                    </div>
                </div>
            </div>
  </div>
  )
}

export default Login