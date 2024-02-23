import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {authactions} from '../../../redux/auth';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { toasterror,toastsuccess } from '../../toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function useAuth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    function signup(data,setloader)
    {
      setloader(true)
       const res= axios.post('http://localhost:3000/signup',data)
       res.then(res=>{
        setloader(false)
         if(res.data.status==='Success')
         {
          
           navigate('/login')
         }
         else{
           toasterror(toast,res.data.msg)
         }
       })
       .then((err)=>{
        setloader(false)
        console.log(err.message)
       })
    }
   function loginintoaccount(data,setloader)
   {
    setloader(true)
    const res= axios.post('http://localhost:3000/login',data)
    res.then(res=>{
     setloader(false)
      if(res.data.status==='Success')
      {
        Cookies.set('usertoken',res.data.user.jwttoken)
          dispatch(authactions.login())
      navigate('/')
      }
      else{
        toasterror(toast,res.data.msg)
      }
    })
    .then((err)=>{
     setloader(false)

    })
   }
 
    return [signup,loginintoaccount]
}
