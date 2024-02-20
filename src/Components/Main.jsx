import React from 'react'
import './main.css'
import computer from '../assets/laptop.png'
import { Typewriter } from 'react-simple-typewriter'
export default function Main() {
  return (
    <div className='home__page m-3 container-fluid '>
    <div className='row content'>
    <div className='col-sm-6'><h2>The Quiz App includes a wide number of <TypingEffect/></h2></div>
 
    <div className='col-sm-6 laptop' ><img src={computer} alt='laptop'/></div>
    </div>
    </div>
  ) 
}
const TypingEffect=()=>
{
    return(
        <span style={{ color: 'green', fontWeight: 'bold' }}>
       
        <Typewriter
          words={['Devop!', 'Python', 'Code', 'Java Script!']}
          loop={Infinity}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
          
        />
      </span>
    )
}