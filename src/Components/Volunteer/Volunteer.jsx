import React from 'react'
import "./Volunteer.css"
import Navbar from '../Home/Navbar/Navbar'
import '../Home/Navbar/Navbar.css'
import VolunteerComp from './VolunteerComp'
function Volunteer() {
  return (
    <div>
        {/*  */}
        <Navbar/>
      <div className="volunteer-section">
         <VolunteerComp image = {true} show = {false} headingText = "Be a Volunteer"/>
       
       </div>
    </div>
  )
}

export default Volunteer
