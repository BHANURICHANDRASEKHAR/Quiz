import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getproblemlist } from './getproblemlist';
import Loader from '../../../Loader';
import Compiler from './Compiler';
import './main.css'
export default function Problem() {
    const [data,setdata]=useState([]);
    const {id}=useParams();
   const dispatch=useDispatch();
   const [loader,setloader]=useState(false)
    useEffect(()=>{
        getproblemlist(setdata,setloader,dispatch)
    },[]);

  return (
    <React.Fragment>
    {
        loader&&<Loader/>
    }
    {
       data.length>0&& <ListofProblems data={data} id={id}/>
    }</React.Fragment>
  )
}
const ListofProblems=({data,id})=>{
    const [itemdata,setitemdata]=useState([])
useEffect(()=>{
getdata(setitemdata,id,data)
},[])
return(
    <div className='container-fluid m-2 '>
      <div className='row'>
      <div className='col-sm-5'>
      {
        itemdata.length>0 && itemdata.map((items)=>{
            
          const {id,problem,explanation,example,name,img}=items;
          return(
           <div className='p-2 compiler-parent' key={id}>
           <h4>{id}. {name}</h4>
           <span className='rounded-4 p-1 mt-3' style={{backgroundColor:'#EEEDEB',color:`${example['type']=='easy'?'green' :'red' }`}}>{example['type']}</span>
           <h6 className='mt-3'> {problem}</h6>
           <p>{explanation}</p>
           {
              items.img&&<img src={img} className='question-images'/>
           }
           <div className='row p-3 mt-2' style={{backgroundColor:'#EEEDEB'}}>
           <h6 style={{fontWeight:'bold'}}>Example-1</h6>
           <div className='m-3'>
           <p><span style={{fontWeight:'bold'}}>Input:</span>   {example['input']}</p>
           {
            example['target']&& <p><span style={{fontWeight:'bold'}}>Target:</span>  {example['target'] || 'true'}</p>
           }
           <p><span style={{fontWeight:'bold'}}>Output:</span>  {example['output'] || 'true'}</p>
           </div>
           </div>
           </div>
          )
        })
      }
      </div>
      <div className='col-sm-7'><Compiler/></div>
      </div>
    </div>
)
}
function getdata(setitemdata,id,data)
{
  const filterdata=data.filter((items)=>items.id==id)
  console.log(filterdata)
  setitemdata(filterdata)
}