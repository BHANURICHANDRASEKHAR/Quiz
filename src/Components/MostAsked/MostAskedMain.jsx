import React,{useState,useEffect} from 'react'
import '../Catogories/Choose/main.css'
import { mostasked } from '../../reacticons'
import { NavLink } from 'react-router-dom'

export default function MostAskedMain() {
  const [carddata,setcarddata]=useState([])
  useEffect(()=>{
    setcarddata(mostasked)
  },[])
  return (
   <div className='container-fluid mt-5'>
   <div className='container  parent pt-5  '>
   <div className='row pt-5 text-center'>
   <h3 className='lead display-6 mt-5 ' >Most Asked Interview Questions with Answers</h3>
  <p className='p-3'>Test your skills with our top topics with a variaty of questions set for beginners and seniors alike!</p>
   <div className='col-sm-8'>
   <div className='card-parent'><Cardsdata carddata={carddata}/></div>
   </div>
   <div className='col-sm-4 mt-4 text-center'>
   <div className='mt-5'><h4>Interview Questions</h4><br/>
   <p>  From Interview experiences, puzzles, Resume,Technical Interview.

    Ace everything with PrepInsta</p></div>
   </div>
   </div>
  </div></div>
  )
}
const Cardsdata=({carddata})=>{
  return(
    <React.Fragment>
    {
      carddata.map((items,index)=>{
        const {name,id,type}=items;
      return(  <div key={id} className='card-children'>
      <NavLink to={`/interview-questions/${type}`}> <div className='d-flex justify-content-center p-3'>
      <items.logo className='display-1 mt-3'/>  
     </div>
      <div className="card-body ">
        <h4 className="mt-5 text-center">{name}</h4>
      </div></NavLink>
     </div>)
      })
    }
    </React.Fragment>
  )
}
