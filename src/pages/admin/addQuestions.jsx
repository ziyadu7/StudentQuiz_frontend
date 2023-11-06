import React, { useState } from 'react'
import axiosInstance from '../../api/axios'
import NavBar from './navBar'

function AddQuestions() {

  const [question,setQuestion] = useState('')
  const [answer,setanswer] = useState('')
  const [option1,setOption1] = useState('')
  const [option2,setOption2] = useState('')
  const [option3,setOption3] = useState('')
  const [err,setErr] = useState('')

  const submitQuestion = ()=>{
    if(question.trim().length == 0||answer.trim().length==0||option1.trim().length==0||option2.trim().length==0||option3.trim().length==0){
      setErr('Fill all the fields')
    }else{
      axiosInstance.post('/admin/addQuestion',{question,answer,option1,option2,option3}).then(res=>{
        console.log(res.data.message);
      }).catch((err)=>{
        console.log(err.response.data);
      })
    }
  }
  return (
    <div className="">
      <NavBar/>
    <div>
      <div className="">
        <label>Question </label>
        <input type="text" onChange={(e)=>setQuestion(e.target.value)} name="uname" required />
      </div>
      <div className="input-container">
        <label>Answer</label>
        <input onChange={(e)=>setanswer(e.target.value)} type="text" required />
      </div>
      <div className="input-container">
        <label>Option 1 </label>
        <input onChange={(e)=>setOption1(e.target.value)} type="text" required />
      </div>
      <div className="input-container">
        <label>Option 2 </label>
        <input onChange={(e)=>setOption2(e.target.value)} type="text" required />
      </div>
      <div className="input-container">
        <label>Option 3 </label>
        <input onChange={(e)=>setOption3(e.target.value)} type="text" required />
      </div>
      <small>{err}</small>
      <div className="button-container">
      <button onClick={()=>submitQuestion()} type="button" >Submit</button>
      </div>
    </div>
  </div>
  )
}

export default AddQuestions