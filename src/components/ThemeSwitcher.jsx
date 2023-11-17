import React, { useEffect, useState } from 'react'
import{TbMoonFilled} from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { themeChange } from '../store/slice/theme'
function ThemeSwicher() {
    const {theme} = useSelector((store)=>store.Theme)
    const dispatch = useDispatch()
    
    useEffect(()=>{
       if(theme==='dark'){
        document.documentElement.classList.add('dark')
       }else{
        document.documentElement.classList.remove('dark')
       }
    },[theme])
    
    const handleThemechange=()=>{
        theme==='dark'?dispatch(themeChange({theme:"light"})):dispatch(themeChange({theme:"dark"}))  
    }
  return (
    <div>
      <button className={`cursor-pointer ${theme=='dark'?'text-white':'text-black'}`} onClick={handleThemechange}><TbMoonFilled/></button>
    </div>
  )
}

export default ThemeSwicher