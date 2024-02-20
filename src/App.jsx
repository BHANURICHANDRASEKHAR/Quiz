import React,{ useState,useEffect } from 'react'

import './App.css'
import Main from './Components/Main'
import Navbar from './Components/Navbar/Narbar'
import Rout from './Components/Navbar/Rout'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    window.AOS.init({ 
      duration: 2000
    });
  });
  return (
    <React.Fragment>
     <Rout/>
    </React.Fragment>
  )
}

export default App
