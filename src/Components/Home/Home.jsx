import React from 'react'
import './Home.css'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Served from './Served/Served'
function Home() {
  return (
    <div className='Home'>
       <div className="Home-container">
        <Navbar/>
       <Banner/>
       <Served/>
        </div>  
    </div>
  )
}

export default Home
