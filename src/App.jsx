import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import StudentRouter from './routes/studentRouter'
import AdminRoute from './routes/adminRoute'
import NotFound from './pages/notFound'
import Login from './pages/student/login'
import { useSelector } from 'react-redux'
import Questions from './pages/student/questions'

function App() {

  const {studentId} = useSelector((state)=>state?.Student)
  return (
    <Router>
      <Routes>
        <Route path='/' element = {studentId ? <Questions/>:<Login/>}/>
        <Route path='/student/*' element = {<StudentRouter/>}/>
        <Route path='/admin/*' element = {<AdminRoute/>}/>
        <Route path='/*' element = {<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
