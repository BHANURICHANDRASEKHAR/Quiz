import React,{useEffect,useState} from 'react'
import Cards from './Cards'
const link='https://quizapi.io/api/v1/categories?apiKey=sLrvLLmzCASyC9b8fYk1wWEhdrFJqQYmm68LQ8aL'
export default function Group() {
  const [groupdata,setgroupdata]=useState([])
   async function fetchdata()
  {
     const data=await fetch(link)
     const response= await data.json()
    response.length>0 && setgroupdata(response)
    }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div><Cards carddata={groupdata}/></div>
  )
}
