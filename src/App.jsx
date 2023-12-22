import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Navbar from './Components/Home/Navbar/Navbar'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Program from './Components/Program/Program'
import DonationPage from './Components/DonationPage/DonationPage'
import Volunteer from './Components/Volunteer/Volunteer'
import Contact from './Components/ContactUs/Contact'
import Help from './Components/Help/Help'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Router>
      
       <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/program' element = {<Program/>}/>
          <Route path='/donation' element = {<DonationPage/>}/>
          <Route path='/volunteer' element = {<Volunteer/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/help' element = {<Help/>}/>
       </Routes>
       <Footer/>
    </Router>

    </>
  )
}

export default App
