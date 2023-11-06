import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminLogout } from '../../store/slice/admin'

function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = ()=>{
        dispatch(adminLogout())
        navigate('/admin/login')
    }
  return (
    <nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div>
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <p className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <span>Admin Side</span>
          </p>
          <ul className="hidden items-center gap-6 lg:flex">
            <li className="block p-1 font-sans cursor-pointer text-sm font-normal leading-normal text-inherit antialiased">
              <p onClick={()=>navigate('/admin/userData')} className="flex items-center">
                userData
              </p>
            </li>
            <li className="block p-1 font-sans cursor-pointer text-sm font-normal leading-normal text-inherit antialiased">
              <p onClick={()=>navigate('/admin/addQuestions')} className="flex items-center">
                addQuestion
              </p>
            </li>
          </ul>
          <button onClick={logout} className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button" data-ripple-light="true">
            <span>LogOut</span>
          </button>
          <button className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" data-collapse-target="navbar">
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden" data-collapse="navbar">
          <div className="container mx-auto pb-2">
            <ul className="mt-2 mb-4 flex flex-col gap-2">
              <li onClick={()=>navigate('/admin/userData')} className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <p className="flex items-center">
                  userData
                </p>
              </li>
              <li onClick={()=>navigate('/admin/addQuestions')} className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <p className="flex items-center">
                addQuestion
                </p>
              </li>
            </ul>
            <button onClick={logout} className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
              <span>LogOut</span>
            </button>
          </div>
        </div>
      </div>    
    </nav>
  )
}

export default NavBar