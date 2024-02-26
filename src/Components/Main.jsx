import React,{useEffect} from 'react'
import './main.css'
import computer from '../assets/laptop.png'
import { Typewriter } from 'react-simple-typewriter'
import Group from './Catogories/Group'
import MostAskedMain from './MostAsked/MostAskedMain'
import ChooseMain from './Catogories/Choose/ChooseMain'
export default function Main() {

  return (
    <React.Fragment>
    <Part1/>
    <ChooseMain/>
    <MostAskedMain/>
   
    </React.Fragment>
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
const Part1=()=>{
  return(<div className='home__page  container-fluid '>
    
  <div className='row content'>
  <div className='col-sm-6 mt-5'><div className='text'><h2>The Skill Sync includes a wide number of <TypingEffect/></h2></div>
  <div className='lead mt-3'><p>  Test your knowledge or easily embed a quiz with our website </p>
  </div>
  <button className='btn btn-outline-success rounded-pill text-white mt-4'><a href='#quiz' className='text-white'>Take A Quiz</a></button>
  </div>

  <div className='col-sm-6 laptop' data-aos='fade-up' data-aos-delay='1200' ><img src={computer} alt='laptop'/></div>
  </div>
  </div>)
}