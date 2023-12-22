import React from 'react'
import './ProgramCard.css'
import { Link } from 'react-router-dom'
function ProgramCard({picture , title}) {
  return (
    <div className='Program-card'>
    <div class="container">
        <div class="blog-post">
            <img src={picture} alt="Man"/>
          
            <div class="text-content">
               <Link to="/"> <img  src="https://img.redro.pl/obrazy/charity-logo-with-love-design-illustration-two-people-logo-colorful-icon-400-173567436.jpg" alt=""/></Link>
                <h2 class="post-title">
                    {title}
                </h2>
                <div class="tags">
                    <Link to="/help" >#donate</Link>
                    <Link to="/volunteer">#volunteer</Link>
                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default ProgramCard
