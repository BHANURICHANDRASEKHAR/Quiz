import React,{ useEffect, useState } from 'react'
import {getcodes,getalgo} from './getcodefromgoogle'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import './top100.css';

import Editor from './Editor'
export default function Code() {
    const {code}=useParams();
    const params=code.split('-')
   const [data,setdata]=useState([]);
   const [loader,setloader]=useState(false)
    useEffect(()=>{
    getcodes(params,setdata,setloader)
    },[])

  return (
    <div>
    {loader?<Loader/>:<div>
   
   {data.length>0&& <div className='container'><CodeInfo params={params} /><Editor data={data} type={params[1]}/><Algorithm params={params}/></div>}
    </div>}
    </div>
  )
}
const CodeInfo=({params})=>{
return(
  <div className='row'>
 <h1 className='text-center'>{params[0]} in {params[1]}</h1>
  </div>
)
}
const Algorithm=({params})=>{

  const [data,setdata]=useState([]);
 
  const [loader,setloader]=useState(false)
  useEffect(()=>{
  getalgo(setdata,setloader,params[2])
  },[]);
  
  return(
    <div className='row'>
    <ul>
    {
      data.length > 0 && data.map((items, index) => {
        const { img,algo: { algorithm, steps } } = items;
     
        return (
          <div className='row mt-3' key={index}>
            <h5>{algorithm}</h5>
            {items.img&&<div className='m-4'><h5>Flowchart</h5><img src={img} className='question-images'/></div>}
             <div>
             <h5>Algorithm:</h5> 
              <ul className='m-2'>
             {steps.map((item, innerIndex) => (
               <li className='p-1' key={innerIndex}>Step:{innerIndex+1}:{item['description']}</li>
             ))}
           </ul></div>
          </div>
        );
      })
    }
    
    </ul>
    </div>
  )
}