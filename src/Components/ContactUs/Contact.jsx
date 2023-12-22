import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./Contact.css";
import { Link } from "react-router-dom";
import VolunteerComp from "../Volunteer/VolunteerComp";
function Contact() {
  return (
    <div>
      <div className="contact-section">
        <Navbar />
      </div>

      <div className="contactus-container">
        <h3>Contact Information</h3>
        <div className="info">
          <div className="address">
            <h4>Address:</h4>
            <div>
              <span> 198 West 21th Street, Suite</span>
              <span> 721 New York NY 10016</span>
            </div>
          </div>

          <div className="phone">
            <h4>Phone : </h4>
            <span> + 1235 2355 98</span>
          </div>
          <div className="emaildetails">
            <h4>Email : </h4>
            <span>abc@gmail.com</span>
          </div>
        </div>

        <div className="contact-form">
          <div className="volunteerComp">
            <VolunteerComp
              image={false}
              show={true}
              headingText="Do you have any questions?"
            />
          </div>
          <div class="google-map">
            {/* <iframe
              src=""
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
             
            ></iframe> */}   
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29441.599655972088!2d75.81938007431638!3d22.7208081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b0b9897ff%3A0xf4fba888e7907cd8!2sSource%20of%20children&#39;s%20happiness!5e0!3m2!1sen!2sin!4v1699791126420!5m2!1sen!2sin" width="600" height="500" style={{border:"0px"}}  referrerpolicy="no-referrer-when-downgrade" loading="lazy" ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
