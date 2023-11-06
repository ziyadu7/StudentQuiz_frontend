import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { studentLogout } from '../../store/slice/student'

function NavBarStudent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = ()=>{
        dispatch(studentLogout())
        navigate('/student/login')
    }
  return (
    <nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div>
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <p className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <span>Quiz Page</span>
          </p>
          <button onClick={logout} className="middle none center rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button" data-ripple-light="true">
            <span>LogOut</span>
          </button>
        </div>
      </div>    
    </nav>
  )
}

export default NavBarStudent