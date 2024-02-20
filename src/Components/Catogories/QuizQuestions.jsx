import React,{useState,useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import QusetionsHeader from './QusetionsHeader';
import Loader from './Loader';
export default function QuizQuestions() {
var {type}=useParams();
const [loader,setloader]=useState(false)
 const [questions,setQuestions]=useState([]);
async function fetchquestions(){
     setloader(true)
    const data=await fetch(`https://quizapi.io/api/v1/questions?apiKey=sLrvLLmzCASyC9b8fYk1wWEhdrFJqQYmm68LQ8aL&category=${type}&limit=11`)
    const res=await data.json();
     res.length>0&&setQuestions(res)
     setloader(false)
 }
 useEffect(()=>{
fetchquestions();
 },[])
 if(loader)
 {
  return(
    <Loader/>
  )
 }
  return (
    <div className='mt-5'><QusetionsHeader listofquestions={questions} type={type}/></div>
  )
}
