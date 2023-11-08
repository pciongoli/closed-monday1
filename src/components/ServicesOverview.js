import React from "react";
import { Link } from "react-router-dom";
import closedMondayImage from "../assets/image/Closedmonday.png"; // Adjust the path as necessary
import "../styles/ServicesOverview.css";

const ServicesOverview = () => {
   return (
      <div className="services-overview">
         <div className="services-content-wrapper">
            <div className="services-container">
               <div className="service">
                  <span
                     className="service-icon"
                     role="img"
                     aria-label="Video Editing"
                  >
                     🎬
                  </span>
                  <div className="service-text">
                     <h3>VIDEO EDITING</h3>
                     <p>
                        Full production video services to bring your vision to
                        life.
                     </p>
                  </div>
                  <Link to="/services" className="learn-more-btn">
                     LEARN MORE
                  </Link>
               </div>
               <div className="service">
                  <span
                     className="service-icon"
                     role="img"
                     aria-label="Audio Editing"
                  >
                     🎧
                  </span>
                  <div className="service-text">
                     <h3>AUDIO EDITING</h3>
                     <p>Clear and crisp audio editing for all your projects.</p>
                  </div>
                  <Link to="/services" className="learn-more-btn">
                     LEARN MORE
                  </Link>
               </div>
               <div className="service">
                  <span
                     className="service-icon"
                     role="img"
                     aria-label="Social Media Content"
                  >
                     📱
                  </span>
                  <div className="service-text">
                     <h3>SOCIAL MEDIA CONTENT</h3>
                     <p>
                        Engaging and creative edits for TikToks, Reels, and
                        Shorts.
                     </p>
                  </div>
                  <Link to="/services" className="learn-more-btn">
                     LEARN MORE
                  </Link>
               </div>
               <div className="service">
                  <span
                     className="service-icon"
                     role="img"
                     aria-label="Podcasts"
                  >
                     🎙️
                  </span>
                  <div className="service-text">
                     <h3>PODCASTS</h3>
                     <p>
                        Comprehensive editing to ensure your message is heard.
                     </p>
                  </div>
                  <Link to="/services" className="learn-more-btn">
                     LEARN MORE
                  </Link>
               </div>
            </div>
            <div className="services-image-container">
               {/* Image source will need to be passed or imported depending on where it's located */}
               <img
                  src={closedMondayImage}
                  alt="Closed Monday"
                  className="services-image"
               />
            </div>
         </div>
      </div>
   );
};

export default ServicesOverview;
