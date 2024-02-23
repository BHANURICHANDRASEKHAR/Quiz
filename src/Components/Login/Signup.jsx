import React, { useState,useRef } from 'react'
import signupvalidation from './inputvalidation'
import {toast,ToastContainer} from 'react-toastify'
import { toastsuccess,toasterror } from '../../toastify';
import useAuth from '../userHooks/useAuth';
import { NavLink } from 'react-router-dom';
import Textfield from './Textfield';
import Loader from '../../../Loader';
import './input.css'
import signup from  '../../assets/sign_back.jpg'
export default function Signup() {
  return (
    <div className='container mt-4 ' >
    <div className='row '>
    <div className='col-sm imgdelete' ><img  src={signup}/></div>
    <div className='col-sm center-div'><InputsFeilds/></div>
    </div>
    <ToastContainer/>
    </div>
  )
}
function InputsFeilds(){
  const [signup]=useAuth();
    const checkbox=useRef();
    const [loader,setloader]=useState(false)
    const [error,setError]=useState('')
    const [userdata,setuserdata]=useState({
        name:'',
        email:'',
        password:'',
        password1:'',
        
      })
      function submit(e)
      {
        e.preventDefault(); 
       if( checkbox.current.checked)
       {
        const data=signupvalidation(userdata,setError)
        if(!data)
        {
          toasterror(toast,error)
        }
        else{
          signup(userdata,setloader)
        }
       }
        else{
            toasterror(toast,"please Select the Checkbox")
        }
        
      }
      function changehandle(e)
      {
       
       setuserdata({...userdata,[e.target.name]:e.target.value})
      }
    return(<React.Fragment>
        <form >  
        <h1 className='lead  mb-3'>Create an Account</h1>
        <Textfield label="Name" type="text" action={changehandle} placeholder='Your Name' userdata={userdata} name='name'/>
        <Textfield label="Email" type="email" action={changehandle} placeholder='Email Address' userdata={userdata} name='email'/>
        <Textfield label="Password" type="password" action={changehandle} placeholder='password' userdata={userdata} name='password'/>
        <Textfield label="Password" type="password" action={changehandle} placeholder='password(Confirm)' userdata={userdata} name='password1'/>
        <div className='form-group'>   <input type='checkbox' className='m-4 ' ref={checkbox}/>&ensp;I agree to the terms of service
        </div>
        <div className='form-group '><button  className='btn btn-outline-success m-4 w-50 rounded-pill' onClick={submit}>Submit</button>
        </div>
        <hr/>
        </form>
      {loader && <Loader/>}
      
        <p className='lead m-5'>Already a member ?<span style={{color:'forestgreen'}}><NavLink to='/login'>Login</NavLink></span></p>
        </React.Fragment>)
}
