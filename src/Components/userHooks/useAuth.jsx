import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {authactions} from '../../../redux/auth';
export default function useAuth() {
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.auth)
    
   function loginintoaccount()
   {
    dispatch(authactions.login)
   }
   return [loginintoaccount]
}
