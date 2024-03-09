import React from 'react'
import {content, pdf} from '../../reacticons'
import Features from './Features'
export default function Home() {
    
  return (
    <div className='container mt-4'>
   <div className='row'>
   <h4 className='text-dark  text-center' style={{fontSize:'30px'}}>Welcome to our Comprehensive Notes Section for Placement Preparation!</h4>
   <div className='col-sm-12 mt-3 p-3 w-100' ><p >{content}</p></div>
   <div className='col-sm-12'><Features/></div>
   </div>
    <div className='row'>
    <Pdfdata/>
  
    </div>
    </div>
  )
}
const Pdfdata=()=>{
  return(
    <div className='row'>
    {
      pdf.map((data)=>{
          return (
              <React.Fragment>
              <div className='col-sm-3'>
              <img src={data.img} className='pdfimgsdata'/>
              
              </div>
              </React.Fragment>
          )
      })
  }
    </div>
  )
}