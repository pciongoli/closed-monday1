// src/pages/Careers.js
import React from "react";
import "../styles/Careers.css";

const Careers = () => {
   return (
      <div className="careers-container">
         <h1>Careers at ClosedMonday</h1>
         <p>
            Join a team that's committed to pushing the boundaries of
            creativity. At ClosedMonday, we believe in fostering a culture of
            innovation, collaboration, and continuous learning.
         </p>
         <div className="careers-section">
            <h2>Why Join Us?</h2>
            <ul>
               <li>A dynamic and inclusive work environment</li>
               <li>Opportunities for professional growth and development</li>
               <li>Work on diverse projects with global impact</li>
               <li>Competitive compensation and benefits</li>
            </ul>
         </div>
         <div className="careers-section">
            <h2>Current Openings</h2>
            <p>
               While we are always on the lookout for talented individuals, here
               are some roles we're actively hiring for:
            </p>
            <ul>
               <li>Content Strategist</li>
               <li>Video Editor</li>
               <li>Sound Engineer</li>
               <li>Marketing Manager</li>
            </ul>
         </div>
         <div className="careers-section">
            <h2>How to Apply?</h2>
            <p>
               Interested in joining our team? Send your updated resume and
               portfolio to careers@closedmonday.media. We'd love to hear from
               you!
            </p>
         </div>
      </div>
   );
};

export default Careers;
