import React, { useState } from 'react'
import axiosInstance from '../../api/axios'
import NavBar from './navBar'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

function AddQuestions() {

  const [question,setQuestion] = useState('')
  const [option1,setOption1] = useState('')
  const [option2,setOption2] = useState('')
  const [option3,setOption3] = useState('')
  const [option4,setOption4] = useState('')
  const [err,setErr] = useState('')

  const {token} = useSelector((state)=>state?.Admin)
  const [answerNo, setAnswerNo] = useState('');

  const handleOptionChange = (event) => {
    setAnswerNo(event.target.value);
  };

  const submitQuestion = ()=>{
    if(question.trim().length == 0||option4.trim().length==0||option1.trim().length==0||option2.trim().length==0||option3.trim().length==0){
      setErr('Fill all the fields')
    }else{
      axiosInstance.post('/admin/addQuestion',{question,option4,option1,option2,option3,answerNo},{ headers: { authorization: `Bearer ${token}` } }).then(res=>{
        toast.success(res?.data?.message)
      }).catch((err)=>{
        console.log(err?.response?.data);
        if(err?.response?.data){
          toast.error(err?.response?.data?.errMsg)
        }
      }) 
    }
  }
  return (
    <div className="">
      <NavBar/>
      <div className="container mx-auto p-4 lg:w-1/2">
      <div className="mb-4">
        <label className="block mb-2">Question</label>
        <input
          type="text"
          onChange={(e) => setQuestion(e.target.value)}
          name="question"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className='py-4'>
        <h4 className='font-semibold'>Answers</h4>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Option 1</label>
        <input
          type="text"
          onChange={(e) => setOption1(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Option 2</label>
        <input
          type="text"
          onChange={(e) => setOption2(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Option 3</label>
        <input
          type="text"
          onChange={(e) => setOption3(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Option 4</label>
        <input
          type="text"
          onChange={(e) => setOption4(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex gap-10">
        <div className='pt-2'>
        <h1 className='font-semibold'>Answer No :</h1>
        </div>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="option1"
          data-ripple-dark="true"
        >
          <input
            id="option1"
            name="type"
            type="radio"
            value="1"
            checked={answerNo === '1'}
            onChange={handleOptionChange}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="option1"
        >
          1
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="option2"
          data-ripple-dark="true"
        >
          <input
            id="option2"
            name="type"
            type="radio"
            value="2"
            checked={answerNo === '2'}
            onChange={handleOptionChange}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="option2"
        >
          2
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="option3 "
          data-ripple-dark="true"
        >
          <input
            id="option3"
            name="type"
            type="radio"
            value="3"
            checked={answerNo === '3'}
            onChange={handleOptionChange}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="option3"
        >
          3
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="option4"
          data-ripple-dark="true"
        >
          <input
            id="option4"
            name="type"
            type="radio"
            value="4"
            checked={answerNo === '4'}
            onChange={handleOptionChange}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="option2"
        >
          4
        </label>
      </div>
    </div>
      <small className="text-red-500 text-center">{err}</small>
      <div className="mb-4">
        <button onClick={submitQuestion} type="button" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddQuestions