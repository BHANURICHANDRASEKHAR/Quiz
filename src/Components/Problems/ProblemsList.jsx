import React,{useEffect, useState} from 'react'
import { getproblemlist } from './getproblemlist'
import Loader from '../../../Loader'
import {  useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';

export default function ProblemsList() {
    const [problemlist,setproblemlist]=useState([])
    const [loader,setloader]=useState(false)
    const dispatch=useDispatch();
useEffect(()=>{
    getproblemlist(setproblemlist,setloader,dispatch)
},[])

  return (
    <div className='container mt-3'>
    {loader ?<Loader/>:<List data={problemlist}/>}
    </div>
  )
}
const List=({data})=>{
  
return(
    <React.Fragment>
{
    data.map((items,index)=>{
        const {example,name,id}=items
        return(
            <div className='row border border-1 p-2 m-4' key={id}>
           <div className='col-sm-8 mt-2'>
             <div><h4>{name}</h4>
             <p className='p-2'><span style={{textTransform:'capitalize',color:`${example['type']=='easy'?'green' :'red' }`}}>{example['type']}:</span>Python(Basic)</p>
             </div>
           </div>
            <div className='col-sm-4 mt-sm-4 p-2'>
           <NavLink to={`/problemlist/${id}`}> <button className='btn btn-outline-primary rounded-pill'>Solve Challege</button></NavLink>
           </div>
            </div>
        )
    })
}
    </React.Fragment>
)
}