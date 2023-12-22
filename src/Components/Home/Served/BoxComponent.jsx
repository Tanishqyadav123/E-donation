import React from 'react'
import './BoxComponents.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function BoxComponent({heading , span1 , span2 , btnText}) {
   
   
  return (
    <div>
        <div className="box">
        <h2>{heading}</h2>
        <span>{span1}</span>
            <span>{span2}</span>
        <button className='servedBtn' ><Link className='link-btn' to={
            btnText === "Donate Now" ? "/help" : "/volunteer"
        }>{btnText}</Link></button>
       </div>
    </div>
  )
}

export default BoxComponent
