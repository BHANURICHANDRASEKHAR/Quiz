import React,{ useState,useEffect } from 'react'
import {ToastContainer} from 'react-toastify'
import './App.css'
import Main from './Components/Main'
import Navbar from './Components/Navbar/Narbar'
import Rout from './Components/Navbar/Rout';
import { authactions } from '../redux/auth'
import { useDispatch, useSelector } from 'react-redux';
import getcookie from './Components/Login/tokenverify'
import Aos from 'aos'
import Footer from './Footer'
function App() {
  const dispatch=useDispatch();
  
  function loginfunction()
  {
   console.log('hi')
    const token=getcookie();
    if(token)
    {
       dispatch(authactions.login())
    }
    else{
      dispatch(authactions.logout())
    }
  }
  useEffect(() => {
   Aos.init({ 
      duration: 2000
    });
  });
  useEffect(()=>{
    loginfunction();
},[])
  return (
    <React.Fragment>
     <Rout/>
     <Footer/>
     <ToastContainer/>
    </React.Fragment>
  )
}

export default App
