import React from 'react'
import {type} from '../../../../reacticons'
import { NavLink } from 'react-router-dom'
export default function QuickLinks({typedata}) {
    
  return (
    <div className='container mt-4'>
    <button className='quicklinkbutton'>Quick Links</button>
    {
        type.map((items,index)=>{
          
            const style={
              background:items.type==typedata && 'lightgray' 
            }
            return(
                <NavLink  key={index} to={`/quiz/${items.type}`}><h6 style={style}  className='p-2 text-success quicklinks'>{items.name}</h6></NavLink>
            )
        })
    }
    </div>
  )
}
