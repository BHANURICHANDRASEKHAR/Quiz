import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <React.Fragment>
  
 <footer className="footer-distributed  container mt-5">
 
       <div className="footer-left">
         <p className="footer-links">
         <Link to='/interview-questions'>Interview Preparation</Link>
         <Link to='/account'>Account</Link>
        
         </p>
 
         <p className="footer-company-name">Quiz © 2023</p>
       </div>
 
       <div className="footer-center">
 
         <div>
           <i className="fa fa-map-marker"></i>
           <p><span>dhiwancheruvu</span>rajahmundry,ap</p>
         </div>
 
         <div>
           <i className="fa fa-phone"></i>
           <p>+919885465280</p>
         </div>
 
         <div>
           <i className="fa fa-envelope"></i>
           <p><a href="mailto:bhanurichandu@gmail.com">bhanurichandu@gmail.com</a></p>
         </div>
 
       </div>
 
       <div className="footer-right">
 
         <p className="footer-company-about">
           <span>About the company</span>
           Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
         </p>
 
     <div className='d-flex'><a href='https://www.linkedin.com/in/bhanuri-chandrasekhar-975988239/' className='m-2 display-6 text-primary' target='_top'><FaLinkedin  /></a> <a href='https://github.com/BHANURICHANDRASEKHAR' target='_top' className='m-2 display-6 '><FaGithub  /></a></div>
       </div>

     </footer>
    </React.Fragment>
   )
}
