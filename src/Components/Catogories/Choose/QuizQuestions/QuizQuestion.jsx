import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {gettypecard} from '../getcardsdata';
import Loader from '../../../../../Loader';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import './questions.css';
import {check,wronganswerscheck} from './checking'

import QuickLinks from './QuickLinks';
export default function QuizQuestion() {
    const {type}=useParams();
   
    const [loader,setloader]=useState(false)
   const [carddata,setcarddata]=useState([]);
   useEffect(()=>{
   gettypecard(type,setcarddata,setloader)
   },[type])
  
  return (
    
    <div className='container body'>{
        loader&& <Loader/>
    }
    {
        carddata.length>0&&
        <div className='row'>
        <h2 className=' mt-5 typename'>{type} <span className='text-success '>::</span> General Questions </h2>
        <div className='col-sm-8  mt-1 questionscard'>
        <Questions questionsdata={carddata}/>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-3 linkscard mt-5' ><QuickLinks typedata={type}/></div>
        </div>
    }
    </div>
  )
}
const Questions=({questionsdata})=>{
  const [correctanswers, setCorrectAnswers] = useState([]);
  const [wronganswers,setWrongAnswers] = useState([]);
    var number=Math.floor(questionsdata.length/5)
    const [correctanswer,setcorrectanswer]=useState(
        {
            id:'',
            status:''
        }
    )
    const [noofpages,setnumberofpages]=useState(number)
    const[pagenumber,setpagenumber]=useState(1)
    function check1(item, answer, id) {
      setcorrectanswer((prevCorrectAnswer) => {
        const updatedAnswer = { ...prevCorrectAnswer, id: id, status: item === answer };
    
        // Check if the item is equal to the answer
        if (answer === item) {
          var listofitem = {
            id: id,
            answer: answer
          };
    
          // If it is, update the list of correct answers
          setCorrectAnswers((prevCorrectAnswers) => [...prevCorrectAnswers, listofitem]);
        }
    
        return updatedAnswer;
      });
    
      // Check if the item is not equal to the answer
      if (item !== answer) {
        var listofitem = {
          id: id,
          item: item
        };
    
        // Update the list of wrong answers
        setWrongAnswers((prevWrongAnswers) => [...prevWrongAnswers, listofitem]);
      }
    }
  return(
    <div className='m-4'>
    
    <div className='row'>
    <div className='col-sm'>
    {
        questionsdata.slice((pagenumber - 1) * 5, 5 * pagenumber).map((data, index) => {
          const alphabets = ['a', 'b', 'c', 'd'];
          const { question, answer, answerList, explanation, id } = data;
           
          return (
            <div className='m-1' key={id || index}>
              <label className='m-2'>{index + 1}. {question}</label>
              <ul>
                {
                  alphabets.map((item, innerIndex) => (
                                       
                    <li key={`${id || index}-${innerIndex}`} className='m-2' onClick={() => check1(item, answer, id)}>
                    {`(${item})`} {answerList[item]} {
                      correctanswer.status && answer === item && check(correctanswers, id, answer) && (
                        <span className='text-success' style={{fontSize:'25px'}}><IoMdCheckmarkCircle/></span>
                  )}
                  { ( wronganswers.length > 0 && wronganswerscheck(wronganswers,id,item) ) &&<span className='text-danger' style={{fontSize:'25px'}} ><RxCrossCircled/></span> }
                  </li>
                  ))
                }
                <div className='d-flex'><span className='text-success' style={{fontSize:'20px'}}>Answer </span>{check(correctanswers, id, answer)&&<div data-aos='fade-down'><li > <span style={{fontSize:'20px'}}>::({answer})</span> </li>
                <li style={{lineHeight:'24px'}}><span className='text-success '>Explanation</span> :{explanation}</li></div>
                }</div>
                
              </ul>
            </div>
          );
        })
      }
      
      
    </div>
    </div>
    <Pages noofpages={noofpages} questionsdata={questionsdata} setpagenumber={setpagenumber} pagenumber={pagenumber}/>
    </div>
  )
}
const Pages=({questionsdata,noofpages,setpagenumber,pagenumber})=>{
    return(
<div className='row '>  
<hr/> 
  <div className='col-sm'>  
<ul className="pagination m-4">
<li className="page-item"><button className='page-link' onClick={()=>{
    pagenumber>1&&setpagenumber(pagenumber-1)
}}>Previous</button></li>
{
    questionsdata.slice(0,noofpages).map((_,index)=>{
        return(
            <li className="page-item"><button className='page-link' onClick={()=>{setpagenumber(index+1)}}>{index+1}</button></li>
        )
    })
}
<li className="page-item"><button className='page-link' onClick={()=>{
    pagenumber<noofpages&&setpagenumber(pagenumber-1)
}}>Next</button></li>
</ul></div>
<hr/>
</div>
    )
}