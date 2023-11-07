import React, { useState } from 'react'
import axiosInstance from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { studentLogin } from '../../store/slice/student'
import ThemeSwicher from '../../components/ThemeSwitcher'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const confirmLogin = () => {
    if (userName.trim().length == 0 || password.trim().length == 0) {
      setErr('Fill all the fields')
    } else {
      setErr('')
      axiosInstance.post('/student/login', { userName, password }).then((res) => {
        console.log(res.data);
        const name = res?.data?.student?.userName
        const mark = res?.data?.student?.mark
        const isAttend = res?.data?.student?.isAttend
        const token = res?.data?.token
        const role = res?.data?.role
        const studentId = res?.data?.student?._id
        dispatch(studentLogin({ name, token, role, studentId, mark, isAttend }))
        navigate('/student/questions')
      }).catch((err) => {
        console.log(err);
        setErr(err?.response?.data?.errMsg)
      })
    }
  }
  return (
    <div className="dark:bg-black dark:text-white">
      <div className=" min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <ThemeSwicher />
          <div className=" px-6 py-8 rounded shadow-md w-full">
            <h1 className="mb-8 text-3xl text-center">Student Login</h1>

           <div className='text-black'>
           <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Name"
              placeholder="Name" />

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password" />
           </div>
            <div className='felx justify-center'>
              <p className='text-red-600 text-center'>{err}</p>
            </div>
            <p className='text-center text-blue-600 cursor-pointer' onClick={() => navigate('/student/register')}>Don't have an account ?</p>
            <button
              type="button"
              onClick={() => confirmLogin()}
              className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >Login Account</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login