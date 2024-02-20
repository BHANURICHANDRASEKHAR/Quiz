import React,{useState} from 'react'
import { imgdata } from './imgdata'
import { NavLink } from 'react-router-dom'
import './card.css'
export default function Cards({carddata}) {
  return (
    <div  className='container mt-4'>
    <div className='row' style={{textAlign:'center'}}><h3 className='lead display-6' >Our Top Topics</h3>
    <p className='p-3'>Test your skills with our top topics with a variaty of questions set for beginners and seniors alike!</p>
    {
        carddata.map((data,index)=>{
           
            return(
                <div className='col-sm-4  ' style={{height:'250px'}} key={index} >
                <NavLink to={`/quiz/${data.name}`}><div className='card mb-2' style={{backgroundImage:`url(${imgdata[index]})`,backgroundPosition:'center',height:'100%'}}>
                <div className='card-body' >
                <h5 className='card-title text-block' >{data.name}</h5>
                </div>
                </div></NavLink>
                </div>
            )
        })
    }

    </div>
    </div>
  )
}
