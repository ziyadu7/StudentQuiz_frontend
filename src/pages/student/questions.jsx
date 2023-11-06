import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import NavBarStudent from './navBarStudent'
import toast from 'react-hot-toast'
import { questionSubmition } from '../../store/slice/student'

function Questions() {

  const [questions, setQuestions] = useState([])
  const [mark, setMark] = useState(0)
  const [attended, setAttended] = useState([])
  const { studentId } = useSelector((state) => state?.Student)
  const [refresh, setRefresh] = useState(false)

  const dispatch = useDispatch()
  const student = useSelector(store => store.Student)

  const countMark = (questionId, answerNo, answer) => {
    if (!attended.includes(questionId)) {
      setAttended([...attended, questionId])
    }
    if (answerNo == answer) {
      setMark(mark + 1)
    } else {
      setMark(mark - 0.25)
    }
  }

  const submitQuiz = () => {
    if (attended.length < questions.length) {
      toast.error('Answer all questions')
    } else {
      axiosInstance.post('/student/submitQuiz', { mark, studentId }, { headers: { authorization: `Bearer ${student?.token}` } }).then(res => {
        setRefresh(!refresh)
        toast.success(res?.data?.message)
        dispatch(questionSubmition({isAttend:true,mark}))
      }).catch(err => {
        console.log(err);
      })
    }
  }

  useEffect(() => {
    if (!student.isAttend) {
      axiosInstance.get('/student/getQuestions', { headers: { authorization: `Bearer ${student?.token}` } }).then(res => {
        setQuestions(res.data.questions)
      }).catch(err => {
        console.log(err);
      })
    }
  }, [refresh])
  return (
    <div>
      <div>
        <NavBarStudent />
      </div>
      {student?.isAttend ? <div class="bg-gray-100 h-full">
        <div class="bg-white p-6  md:mx-auto">
          <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Successfully Completed!</h3>
            <p class="text-gray-600 my-2">Thank you for participating this quiz event.</p>
            <p> Your Score is : {student.mark} </p>
          </div>
        </div>
      </div> : <div className='flex w-full p-4 justify-center'>
        <div>
          {questions?.map((question, i) => (
            <div className='pt-2'>
              <h4 className='font-semibold'>{i + 1} - {question?.question}</h4>
              <div className='ps-5 gap-2'>
                <input
                  type="radio"
                  id={`option1_${question?._id}`}
                  name={`answer_${question?._id}`}
                  value="option1"
                  onChange={() => countMark(question?._id, question?.answerNo, 1)}
                  className='me-2'
                />
                <label htmlFor={`option1_${question?._id}`}>{question?.option1}</label>
                <br />
                <input
                  type="radio"
                  id={`option2_${question?._id}`}
                  name={`answer_${question?._id}`}
                  value="option2"
                  className='me-2'
                  onChange={() => countMark(question?._id, question?.answerNo, 2)}
                />
                <label htmlFor={`option2_${question?._id}`}>{question?.option2}</label>
                <br />
                <input
                  type="radio"
                  id={`option3_${question?._id}`}
                  name={`answer_${question?._id}`}
                  value="option3"
                  className='me-2'
                  onChange={() => countMark(question?._id, question?.answerNo, 3)}
                />
                <label htmlFor={`option3_${question?._id}`}>{question?.option3}</label>
                <br />
                <input
                  type="radio"
                  id={`answer_${question?._id}`}
                  name={`answer_${question?._id}`}
                  value="answer"
                  className='me-2'
                  onChange={() => countMark(question?._id, question?.answerNo, 4)}
                />
                <label htmlFor={`answer_${question?._id}`}>{question?.option4}</label>
              </div>
            </div>
          ))}

          <div className='flex justify-end'>
            <button className='bg-blue-600 py-1 px-2 rounded-md' onClick={() => submitQuiz()}>Submit</button>
          </div>
        </div>
      </div>
      }



    </div>
  )
}

export default Questions