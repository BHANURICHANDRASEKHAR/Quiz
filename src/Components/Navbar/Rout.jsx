import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Main from '../Main'
import Quiz from '../Quiz'
import Navbar from './Narbar'
import QuizQuestions from '../Catogories/QuizQuestions'
import Signup from '../Login/Signup'
import Login from '../Login/Login'
export default function Rout() {
  return (
    <React.Fragment>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/account' element={<Quiz/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/quiz/:type' element={<QuizQuestions/>}/>
    </Routes></React.Fragment>
  )
}
