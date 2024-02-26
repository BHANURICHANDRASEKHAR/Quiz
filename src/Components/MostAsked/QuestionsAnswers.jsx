import React,{useState} from 'react'
import './main.css'
export default function QuestionsAnswers({data}) {
    const pages=Math.floor(data.length/5)
        const [pagenumber,setpagenumber]=useState(1)
  return (
   <React.Fragment>
   {
    data.slice((pagenumber - 1) * 5, 5 * pagenumber).map((items,index)=>{
        const {id,question,answer,img}=items;
        return(
            <div className='container-fluid m-3' key={index}>
            <h4 className='mostquestions'>{index+1}. {question}</h4>
            {
            img && <img src={img} className='question-images'  />
            }
            <label><span className='text-success text-justify m-2'></span>{answer}</label>
            </div>
        )
    })
   }
   <Pages data={data} pagenumber={pagenumber} pages={pages} setpagenumber={setpagenumber} />
   </React.Fragment>
  )
}
const Pages=({data,pagenumber,setpagenumber,pages})=>{
    return(
        <div className='m-4 pageparent'>
        <ul className="pagination m-4">
        <li className="page-item"><button className='page-link' onClick={()=>{
            pagenumber>1&&setpagenumber(pagenumber-1)
        }}>Previous</button></li>
        {
            data.slice(0,pages).map((_,index)=>{
                return(
                    <li className="page-item"  key={index}><button className='page-link ' onClick={()=>{setpagenumber(index+1)}}>{index+1}</button></li>
                )
            })
        }
        <li className="page-item"><button className='page-link' onClick={()=>{
            pagenumber<pages&&setpagenumber(pagenumber-1)
        }}>Next</button></li>
        </ul>
        </div>
    )
}