import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import { useSelector } from 'react-redux'

function Questions() {

  const [questions, setQuestions] = useState([])
  const [mark, setMark] = useState(0)
  const {studentId} = useSelector((state)=>state?.Student)

  const countMark = (questionId, answer) => {
    const question = questions.find((question) => question._id == questionId)
    if (question.answer == answer) {
      setMark(mark + 1)
    } else {
      setMark(mark - 0.25)
    }
    console.log(mark);
  }

  const submitQuiz = ()=>{
    axiosInstance.post('/student/submitQuiz',{mark,studentId}).then(res=>{
      console.log(res?.data?.message);
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
    axiosInstance.get('/student/getQuestions').then(res => {
      setQuestions(res.data.questions)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      <h1>Quiz Page</h1>
      {questions?.map((question,i) => (
        <>
          <div key={question._id}>
          <h4>{i+1} - {question.question}</h4>
          <input
            type="radio"
            id={`answer_${question._id}`}
            name={`answer_${question._id}`}
            value="answer"
            onChange={() => countMark(question._id, question.answer)}
          />
          <label htmlFor={`answer_${question._id}`}>{question.answer}</label>
          <br />
          <input
            type="radio"
            id={`option1_${question._id}`}
            name={`answer_${question._id}`}
            value="option1"
            onChange={() => countMark(question._id, question.option1)}
          />
          <label htmlFor={`option1_${question._id}`}>{question.option1}</label>
          <br />
          <input
            type="radio"
            id={`option2_${question._id}`}
            name={`answer_${question._id}`}
            value="option2"
            onChange={() => countMark(question._id, question.option2)}
          />
          <label htmlFor={`option2_${question._id}`}>{question.option2}</label>
          <br />
          <input
            type="radio"
            id={`option3_${question._id}`}
            name={`answer_${question._id}`}
            value="option3"
            onChange={() => countMark(question._id, question.option3)}
          />
          <label htmlFor={`option3_${question._id}`}>{question.option3}</label>
          <br />
        </div>
        </>
      ))}
      <div>
        <button onClick={()=>submitQuiz()}>Submit</button>
      </div>
    </div>
  )
}

export default Questions