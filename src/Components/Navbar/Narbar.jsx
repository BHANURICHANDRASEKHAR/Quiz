import React,{useState} from 'react';
import './navbar.css';
import { clearcookie } from '../Login/tokenverify';
import { IoMenu } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
export default function Navbar() {
  const authslice=useSelector((state)=>state.auth)
  const [flag,setflag]=useState(true)
  function confirm()
  {
    clearcookie();
  }
  function setflagfun()
  {
    setflag((prev)=>!prev)
  }
  return (
   
        <div className="nav container-fluid  d-flex  ">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
      <div className="nav-title text-white">Skill Sync</div>
       </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
        
            {
              flag? <IoMenu onClick={()=>{setflag((prev)=>!prev)}} className='text-white' style={{fontSize:'26px'}}/>:<GiCancel onClick={()=>{setflag((prev)=>!prev)}} className='text-white' style={{fontSize:'26px'}}/>
            }

            </label>
          </div>

          <div className="nav-links1 ">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/problemlist"> Problems</NavLink>
            <NavLink to="/notes"> Notes</NavLink>
            <NavLink to="/top100">Top-100 Problems</NavLink>
            {
              authslice.auth ? (
                <Popconfirm
                 
                  description="Are you sure to Logout?"
                  okText="Yes"
                  onConfirm={confirm}
                  cancelText="No"
                >
                  <button className='btn btn-outline-info m-3'>logout</button>
                </Popconfirm>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )
            }
            
          </div>
        </div>   
  );
}
