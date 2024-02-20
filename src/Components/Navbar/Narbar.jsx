import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
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
          </div>
        </div>

   
  );
}
