import React, { useEffect, useState } from 'react'
import './card.css'
export default function QusetionsHeader({listofquestions,type}) {
  const [Questionnumber,setQuestionmumber]=useState(1)
  console.log(listofquestions)
  return (
    <div className='container' style={{background:'white'}}>
    <div className='row'>
    <h4 className='text-center mb-5'>{listofquestions.length} Common {type} Questions</h4>
   {
        listofquestions.slice(0,10).map((_,index)=>{
          const classactive=(index+1==Questionnumber) ? 'active1' :null;
           return(  <div className='col text-center questions ' key={index} id={classactive} onClick={()=>{setQuestionmumber(index+1)}}> Question <br/><div className='text-center'>{index+1}</div></div>)
        })
    }
    </div>
    <div className='text-center'> <h2 className='lead after'>Question {Questionnumber}</h2></div>
    <Question listofquestions={listofquestions} qno={Questionnumber}/>
    <NextQuestion Questionnumber={Questionnumber} setQuestionmumber={setQuestionmumber}/>
    </div>
  )
}
const Questions=({listofquestions,qno})=>{
 const [selectquestion,setselectquestion]=useState([])
 const [answers,setanswers]=useState([]);
 useEffect(()=>{
  listofquestions.length>0&&setselectquestion(listofquestions[qno])
  setanswers(selectquestion.answers)
 })

  return(
    <div className='container mt-3'>
    <label className='lead'>{qno}.&ensp;{selectquestion.question}</label><br/>
    {answers &&
      Object.keys(answers).slice(0, 4).map((key) => (
        <React.Fragment key={key}>
          <input type='checkbox' className='m-3' value={answers[key]} />
          {answers[key]}<br/>
        </React.Fragment>
      ))}
    
    </div>
    
  )
}
const Question =React.memo(Questions)
const NextQuestion=({Questionnumber,setQuestionmumber})=>{
  console.log(Questionnumber)
return(
  <div className='d-flex justify-content-end'>
  <button className='btn btn-outline-primary rounded-pill'>Next Question</button>
  </div>
)
}
