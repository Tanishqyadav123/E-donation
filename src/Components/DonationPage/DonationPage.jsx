import React from 'react'
import "./DonationPage.css"
import About from '../About/About'
import Navbar from '../Home/Navbar/Navbar'
import MainPage from '../MainPage/MainPage'
import Card from '../About/Card/Card'
function DonationPage() {
  return (
    <div>
      <div className='About'> 
    <div className="About-section">
        <Navbar/>
       <MainPage title = "Donators..."/>
       </div>
       
       </div>

        <div className="donationtake">
            <div className="firstrow">
                <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_1.jpg"/>
                <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_2.jpg"/>
                <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_3.jpg"/>
            </div>
            <div className="secondrow">
            <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_4.jpg"/>
            <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_5.jpg"/>
            <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_6.jpg"/>

            </div>
            <div className="thirdrow">
            <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_7.jpg"/>
            <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_8.jpg"/>
            <Card Name = "Ivan Jacobson" Amount= "300" person="https://themewagon.github.io/welfare/images/person_9.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default DonationPage
