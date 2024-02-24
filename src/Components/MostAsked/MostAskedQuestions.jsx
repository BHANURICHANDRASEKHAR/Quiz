import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {gettypecard} from './getanswersdata'
import QuestionsAnswers from './QuestionsAnswers';
import { mostasked } from '../../reacticons'

import QuickLinks from './QuickLinks';
import Loader from '../../../Loader';
export default function MostAskedQuestions() {
    const {type}=useParams();
    const [questions,setquestions]=useState([]);
    const [loader,setloader]=useState(false)
useEffect(()=>{
    gettypecard(type,setquestions,setloader)
},[type])

  return (
    <div className='container-fluid'>
    {loader &&<Loader/>}
    <div className='row answers'>
   
    <h3 className='m-4' style={{textTransform:'capitalize'}}>Top {questions.length} {type} Interview Questions</h3>

    <div className='col-sm-9 questionsandanswer'>
     {questions.length>0 && <QuestionsAnswers data={questions}/>}
    </div>
    <div className='col-sm-3 questionsandanswer' >
    <QuickLinks typedata={type} type={mostasked}/>

    </div>
    </div>
    </div>
  )
}

