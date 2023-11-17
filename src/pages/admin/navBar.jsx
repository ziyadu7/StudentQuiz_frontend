import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { adminLogout } from '../../store/slice/admin'

function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(adminLogout())
    navigate('/admin/login')
  }
  return (
    <>
      <div className='h-[65px]'>
        <nav className="mx-auto fixed block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div>
            <div className="container mx-auto flex items-center justify-between text-gray-900">
              <p className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <span>Admin Side</span>
              </p>
              <ul className=" flex items-center gap-6 lg:flex">
                <li className="block p-1 font-sans cursor-pointer text-sm font-normal leading-normal text-inherit antialiased">
                  <p onClick={() => navigate('/admin/userData')} className={`${location.pathname == '/admin/userData' ? 'font-bold' : ''} flex items-center`}>
                    userData
                  </p>
                </li>
                <li className="block p-1 font-sans cursor-pointer text-sm font-normal leading-normal text-inherit antialiased">
                  <p onClick={() => navigate('/admin/addQuestions')} className={`${location.pathname == '/admin/addQuestions' ? 'font-bold' : ''} flex items-center`}>
                    addQuestion
                  </p>
                </li>
              </ul>
              <button onClick={logout} className="middle none center rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button" data-ripple-light="true">
                <span>LogOut</span>
              </button>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}

export default NavBar