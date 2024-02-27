import React,{useState,useEffect} from 'react'
import {gettop100data} from './getproblmesdata'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
export default function Top100Main() {
    const [data,setdata]=useState([]);
    const [loader,setloader]=useState(false)
    useEffect(()=>{
     gettop100data(setdata,setloader)
    },[])
  
  return (
    <div >
    {
        loader?<Loader/>:<Problems data={data}/>
    }
    </div>
  )
}
const Problems=({data})=>{
    
    return(
        <div className='container mt-5'>
        <h2>Top 100 Codes</h2>
        <ul>
     {
        data.map((items, index) => {
            const { id, problem, type } = items;
            return (
                <div key={id} className='row m-3 p-2'>
                    <div className='col-sm-6 mt-3'>
                        <h6>{problem}</h6>
                    </div>
                    <div className='col-sm-4'>
                        <Link to={`/top100/${encodeURIComponent(problem)}-${encodeURIComponent(type['java'])}-${id}`}>
                            <span className='btn btn-warning'>{type['java']}</span>
                        </Link>
                        <Link to={`/top100/${encodeURIComponent(problem)}-${encodeURIComponent(type['python'])}`}>
                        <span className='btn btn-primary m-3'>{type['python']}</span>
                    </Link>
                    <Link to={`/top100/${encodeURIComponent(problem)}-${encodeURIComponent(type['python'])}`}>
                    <span className='btn btn-success m-3'>{type['cpp']}</span>
                </Link>
                    </div>
                </div>
            );
        })
     }        
        </ul>
        </div>
    )
}