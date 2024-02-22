import React from 'react'

export default function Textfield({label,type,action,placeholder,userdata,name}) {
  return (
    <div className='form-group inputs m-4'>
    <label >{label}</label>
    <input type={type} className="form-control" required value={userdata[name]}  placeholder={placeholder} name={name}  onChange={action}/>
    </div>
  )
}
