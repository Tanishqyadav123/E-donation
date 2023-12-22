import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
function Card({Name , Amount , person }) {
  return (
    <div className='Cards'>
       <div className="card-section">
        <div className="card-img">
            <img src={person} alt="" />
        </div>
   <div className='card-content'>
         <span className='name'>{Name}</span>
          <span className='donate-now'>Donated Just now</span>
          <span className='amt'>Donated <span>${Amount}</span> for</span>
          <Link to="/"><span className='link-food'>Children Needs Food</span></Link>
   </div>
       </div>
    </div>
  )
}

export default Card
