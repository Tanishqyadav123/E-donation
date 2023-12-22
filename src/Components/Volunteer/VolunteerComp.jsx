import React from "react";
import "./Volunteer.css";
function VolunteerComp({ image , headingText, show }) {
  return (
    <div>
      <div className="content">
       { image ?
         <img
          src="https://themewagon.github.io/welfare/images/bg_4.jpg"
          alt=""
        /> : null}
        <div className="volunteer-form">
          <h2>{headingText}</h2>
          <form action="">
            <div className="input-tags">
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              {
                show ? 
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />: null
              }
              <textarea
                name="msg"
                id="msg"
                cols="60"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="volunteer-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VolunteerComp;
