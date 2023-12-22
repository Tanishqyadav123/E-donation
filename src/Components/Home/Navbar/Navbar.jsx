import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='Navigation'>
        <div className='nav-items nav-container'>
        
      <div className="logo">
              <img src="https://img.redro.pl/obrazy/charity-logo-with-love-design-illustration-two-people-logo-colorful-icon-400-173567436.jpg" alt="Logo" />
      </div>
      <div className="Nav-links">
         
               <div className='links'>
               <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">Who We Are?</NavLink></li>
                <li><NavLink to="/program">Programs</NavLink></li>
                <li><NavLink to="/donation">Donations</NavLink></li>
                <li><NavLink to="/volunteer">Volunteer</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
               </div>
            
               <div className="donation-btn">
                 <button><Link to="/help">Make a Donation</Link></button>
               </div>
             
      </div>
    </div>
    </div>
  )
}

export default Navbar
