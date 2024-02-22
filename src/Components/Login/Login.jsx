import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import signup from '../../assets/sign.png'
import Textfield from './Textfield';
import GoogleButton1 from './GoogleButton1';
import './input.css'
export default function Login() {
  const [data,setdata]=useState({
    email:'',
    password:''
  })
  function changehandle()
  {

  }
  function submit()
  {

  }
  return (
    <div className='container mt-4 ' >
    <div className='row '>
    <div className='col-sm imgdelete' ><img src={signup}/></div>
    <div className='col-sm center-div'> <Textfield label="Email" type="email" action={changehandle} placeholder='Email Address' userdata={data} name='email'/>
    <Textfield label="Password" type="password" action={changehandle} placeholder='password' userdata={data} name='password'/>
    <div className='form-group '><button  className='btn btn-outline-success m-4 w-50 rounded-pill' >Submit</button>
    </div></div>
    </div>
    <GoogleButton1/>
    <ToastContainer/>
    </div>
  )
}
