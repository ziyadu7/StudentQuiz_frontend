import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import StudentRouter from './routes/studentRouter'
import AdminRoute from './routes/adminRoute'
import NotFound from './pages/notFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/student/*' element = {<StudentRouter/>}/>
        <Route path='/admin/*' element = {<AdminRoute/>}/>
        <Route path='/*' element = {<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
