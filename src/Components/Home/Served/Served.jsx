import React, { useEffect } from 'react'
import './Served.css'
import BoxComponent from './BoxComponent'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import {ai} from 'react-icons/ai'
function Served() {
  const [serveCount , setServeCount] = useState(0)
  let val = 1432805
const IncrementCounter = () =>{
  
    setServeCount(serveCount +  1000)
}
  useEffect(() =>{
    let id 
    if (Number(serveCount) < 120000){
      id = setTimeout(IncrementCounter, 10)
    }
    else {
      //  setServeCount(1,432,805) 
        clearTimeout(id) 
    }
     

})
  return (
    <div className='Served'>
       <div className="firstbox">
          <h2>Served Over</h2>
          <h1>{serveCount}+ </h1>
          <h2>Children in 190 countries in the world</h2>
       </div>
       <BoxComponent heading = "Donate Money" span1 = "Even the all-powerful Pointing has" span2 ="no control about the blind texts." btnText = "Donate Now"/>
     <BoxComponent  heading= "Be a Volunteer" span1 = "Even the all-powerful Pointing has" span2 = "no control about the blind texts." btnText = "Be a Volunteer" /> 
   
    </div>
  )
}

export default Served
