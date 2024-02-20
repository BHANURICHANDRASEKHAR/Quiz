import React, { useEffect, useState } from 'react'
import {Popconfirm} from 'antd'
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
    <Submit/>
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
       answers[key]!==null && <React.Fragment key={key}>
       <input type='checkbox' className='m-3' value={answers[key]} />
       {answers[key]}<br/>
     </React.Fragment>
      ))}
    
    </div>
    
  )
}
const Question =React.memo(Questions)
const NextQuestion=({Questionnumber,setQuestionmumber})=>{
  const style={
    display:'none'
  }
 
return(
  <div className='d-flex justify-content-end '>
  <div className='m-4' style={(Questionnumber==1)?style:null}>  <button className='btn btn-outline-primary rounded-pill' onClick={()=>{
    Questionnumber>1&&setQuestionmumber(Questionnumber-1)
  }} 
  >Previous Question</button>
  </div>

  <div className='m-4' style={(Questionnumber==10)?style:null}> <button className='btn btn-outline-primary rounded-pill' 
  onClick={()=>{
    Questionnumber<10&&setQuestionmumber(Questionnumber+1)
  }} >
  Next Question</button></div>
  </div>
)
}

const Submit=()=>{
function confirm(){
console.log('hi')
  }
  return(
    <Popconfirm
    title="Submit The Answers"
    description="Are you sure to Submit "
    onConfirm={confirm}
  
    okText="Yes"
    cancelText="No"
  >

    <button className='btn btn-outline-success rounded-pill'>Submit Answers </button>  </Popconfirm>
  )
}