import React, { useState } from 'react'
import MainPage from '../MainPage/MainPage'
import '../MainPage/MainPage.css'
import Navbar from '../Home/Navbar/Navbar'
import ProgramCard from './Program-card/ProgramCard'
import './Program.css'
import '../Home/Navbar/Navbar.css'

function Program() {
   
  let arr = ["Need of clean water for drinking" , "Child Welfare and Protection Programs" , "Orphanages and Residential Care Programs" , "Healthcare and Nutrition Programs" ,  "Education Programs" , "Child Advocacy and Rights Programs"]

  const [list , setList] = useState(arr)
  const [text , setText ] = useState("") 
   const handleChange = (e) =>{
      console.log(e.target.value)
       
     setList(
        list.filter((element , index) =>{
              if (element.includes (e.target.value)){ 
                 return element
              }
        })
     )

     console.log(list)

   }

  return (
    <div className='About'> 
    <div className="About-section">
        <Navbar/>
       <MainPage title="Programs..."/>
         
         {/* Programs card designing */}
       <div className="photo-container">
           <div className='search-bar'>
            <input type="text" name="" id="" className='inputField' placeholder='Search programs here' onChange={handleChange} />
            
           </div>

         <div className="first">
             {
               
                 list.map((element , index) =>{
                   return <>
                     <ProgramCard picture={`https://themewagon.github.io/welfare/images/cause-${index+1}.jpg`} title = {element}/>
                   </>
                 })
             }
    
{/*        
         <ProgramCard picture="https://themewagon.github.io/welfare/images/cause-2.jpg" title = "Child Welfare and Protection Programs"/>
         <ProgramCard picture="https://themewagon.github.io/welfare/images/cause-3.jpg" title = "Orphanages and Residential Care Programs"/>
         <ProgramCard picture="https://themewagon.github.io/welfare/images/cause-4.jpg" title = "Healthcare and Nutrition Programs"/>
         <ProgramCard picture="https://themewagon.github.io/welfare/images/cause-5.jpg" title = "Education Programs"/>
         <ProgramCard picture="https://themewagon.github.io/welfare/images/cause-6.jpg" title = "Child Advocacy and Rights Programs"/> */}
      
         
         </div>
         <div className="second">
       
     
         </div>
         </div> 
    </div>   
    </div>
  )
}

export default Program
