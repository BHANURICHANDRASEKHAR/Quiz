import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import signup from '../../assets/sign.jpg'
import Textfield from './Textfield';
import useAuth from '../userHooks/useAuth';
import { toasterror } from '../../toastify';
import GoogleButton1 from './GoogleButton1';
import { loginvalidation } from './inputvalidation';
import './input.css'
import Loader from '../../../Loader';
import GoogleButton from 'react-google-button';
export default function Login() {
 
  return (
    <div className='container mt-4  loginpage' >
    <div className='row'>
    <div className='col-sm imgdelete'><img src={signup} className='imglogin'/></div>
    <div className='col-sm center-div'><Textfields/> </div>
    </div>

    <ToastContainer/>
    </div>
  )
}
const Textfields=()=>{
  const [err,setError]=useState('')
  const [loader,setloader]=useState(false)
  const [signupfunction,loginintoaccount]=useAuth();
  const [data,setdata]=useState({
    email:'',
    password:''
  })
  function changehandle(e)
  {
   setdata({...data,[e.target.name]:e.target.value})
  }
  function submit()
  {
   const flag=loginvalidation(data,setError)
    flag?loginintoaccount(data,setloader):toasterror(toast,err)
 
  }
  return(
    <div >
    <h1 className='lead'>Sign In</h1>
    <Textfield label="Email" type="email" action={changehandle} placeholder='Email Address' userdata={data} name='email'/>
    <Textfield label="Password" type="password" action={changehandle} placeholder='password' userdata={data} name='password'/>
    <div className='form-group '><button  className='btn btn-outline-success m-4 w-50 rounded-pill' onClick={submit}>Submit</button>
    {loader&&<Loader/>}
    </div>
   <div style={{marginLeft:'40px'}} className='p-2'>
   <p className='lead' >Or Signin With</p>
   <div  style={{marginLeft:'60px'}}><GoogleButton1/></div>
   <p className='lead mt-2 '>Dont have a Acoount ?<span style={{color:'forestgreen'}}><NavLink to='/signup'>Signup</NavLink></span></p>
   </div>
    </div>
    )
}