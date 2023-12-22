import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import './About.css'
import Founder from './Founder/Founder'
import Donator from './Donator/Donator'
import Card from './Card/Card'
import MainPage from '../MainPage/MainPage'
function About() {
  return (
    <div className='About'> 
    <div className="About-section">
        <Navbar/>
       <MainPage title = "About..."/>
        <div className='About-founder'> 
        <Founder/>
        </div>

        <div className="donators">
            <Donator/>
        </div>
        <div className='donaters'>
          <Card  Name = "Ivan Jacobson" person="https://themewagon.github.io/welfare/images/person_1.jpg" Amount = "300" />
          <Card  Name = "Richard Talyor" person="https://themewagon.github.io/welfare/images/person_2.jpg" Amount = "150" />
          <Card  Name = "Chris Woakes" person="https://themewagon.github.io/welfare/images/person_3.jpg" Amount = "250" />
        </div>
    </div>
    </div>
  )
}

export default About
