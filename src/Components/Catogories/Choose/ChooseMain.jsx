import React, { useEffect, useState } from 'react'
import './main.css'
// react icons links
import  {type} from '../../../reacticons'
import {gettypecard} from './getcardsdata'
import {NavLink} from 'react-router-dom'
export default function ChooseMain() {

  return (
    <div className='container-fluid parent '>
    <div className='row' style={{textAlign:'center'}}><h3 className='lead display-6 mt-5' >Our Top Topics</h3>
    <p className='p-3'>Test your skills with our top topics with a variaty of questions set for beginners and seniors alike!</p>
   </div>
   <Typecards/> 
    </div>
  )
  }
  const Typecards=()=>{
    const [cardsdata,setcardsdata]=useState([])
    useEffect(()=>{
      setcardsdata(type)
    },[])
    return(
      <div className='container'>
      <div className='row'>
      <div className='col-sm-8  card-parent '>
      {
        cardsdata.length>0 && cardsdata.map((items)=>{
          const {id,name,type}=items;
        
          return(
            <div key={id} className='card-children'>
           <NavLink to={`quiz/${type}`}> <div className='d-flex  justify-content-center'>  
           <items.logo className='display-1 mt-3'/></div>
           <div className="card-body ">
             <h4 className="mt-5 text-center   ">{name}</h4>
           </div></NavLink>
          </div>
          )
        })
      }
      </div>
      <div className='col-sm-4 content-text' >
      <h4 className=' mt-4 p-2' style={{fontWeight:'500'}}>Choose what you want?</h4>
      <p className=' p-2'> you want to learn coding, aptitude or check interview experience just Choose from the left</p>
      </div>
      
      </div>
      </div>
    )
  }