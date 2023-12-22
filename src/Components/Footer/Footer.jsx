import React from 'react'
import './Footer.css'
import BlogComp from './BlogComp/BlogComp'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className="Footer-Section">
         <div className="footer-about">
           <div className="about-text">
           <h2>ABOUT US</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           </div>
           <div className="social">
           </div>

         </div>
         <div className="recentBlog">
            <h2>RECENT BLOG</h2>
            <div className="blogs">
            <BlogComp pic = "https://themewagon.github.io/welfare/images/image_1.jpg"/>
            <BlogComp pic = "https://themewagon.github.io/welfare/images/image_2.jpg"/>
            </div>
         </div>

         <div className="Site-Links">
            <h2>SITE LINKS</h2>

            <div className="links">
               <span>
                <a to="/">Home</a>
               </span>
               <span>
                <a to="/about">About</a>
               </span>
               <span>
                <a to="/program"><span>Program</span></a>
               </span>
               <span>
                <a to="/donation">Donations</a>
               </span>
               <span>
                <a to="/volunteer">Volunteer</a>
               </span>
               <span>
                <a to="/contact us">Contact Us</a>
               </span>
            </div>
         </div>


         <div className="questions">
            <h2>HAVE A QUESTIONS?</h2>
           <div className="details">
            
            <div>
                <span>	203 Fake St. Mountain View, </span>
               <span>San Francisco, California, USA</span>
            </div>
            <div>
                <span className='phn'>	+2 392 3929 210</span>
            </div>
            <div>
                <span className='email'>info@yourdomain.com</span>
            </div>
            </div> 
         </div>
      </div>
    </div>
  )
}

export default Footer
