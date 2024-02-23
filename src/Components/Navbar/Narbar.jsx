import React from 'react';
import './navbar.css';
import { clearcookie } from '../Login/tokenverify';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
export default function Navbar() {
  const authslice=useSelector((state)=>state.auth)
  function confirm()
  {
    clearcookie();
  }
  return (
   
        <div className="nav container-fluid  d-flex ">
          <input type="checkbox" id="nav-check" />

          <div className="nav-header">
      <div className="nav-title text-white">Quiz App</div>
       </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span style={{ background: 'black' }}></span>
              <span style={{ background: 'black' }}></span>
              <span style={{ background: 'black' }}></span>
            </label>
          </div>

          <div className="nav-links1">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/account"> Account</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
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
