import React from "react";
import heroVideo from "../assets/video/hero-video.mp4";
import videoEditorImage from "../assets/image/video-editor-img2.png";
import heroLogo from "../assets/image/hero-logo.png";
import videoEditorImage2 from "../assets/image/video-editor-img3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HomePage.css";

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
};

const HomePage = () => (
   <div className="home">
      <div className="hero">
         <img src={heroLogo} alt="Logo" className="hero-logo" />
         <video className="hero-video" autoPlay loop muted>
            <source src={heroVideo} type="video/mp4" />
            YOUR BROWSER DOES NOT SUPPORT THE VIDEO TAG.
         </video>
         <div className="action-buttons">
            <button onClick={() => (window.location.href = "/contact")}>
               GET IN CONTACT WITH US
            </button>

            <button onClick={() => (window.location.href = "/portfolio")}>
               SEE SOME OF OUR WORK!
            </button>
         </div>
      </div>
      <div className="clients-section">
         <h2>OUR COLLABORATORS</h2>
         <div className="widgets-container">
            <div className="spotify-widget">
               <h3>JOHNNY DRINKS</h3>
               <iframe
                  title="Spotify Widget - JOHNNY DRINKS"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/7xuYMlfFAXUfReoHKGHjb6?utm_source=generator"
                  width="100%"
                  height="352"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
            <div className="spotify-widget">
               <h3>UNDER THE INFLUENCE</h3>
               <iframe
                  title="Spotify Widget - UNDER THE INFLUENCE"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/5NDVTKGjiZhrth5hJbfvsA/video?utm_source=generator"
                  width="624"
                  height="351"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
            <div className="spotify-widget">
               <h3>SUBURB TALKS</h3>
               <iframe
                  title="Spotify Widget - SUBURB TALKS"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/4YLbUxILwRNN9e1UUCDV1D?utm_source=generator"
                  width="100%"
                  height="352"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
         </div>
      </div>
      <div className="services-overview">
         <h2>SERVICES WE OFFER</h2>
         <div className="services-container">
            <div className="services-list">
               <ul>
                  <li>FULL PODCAST PRODUCTION</li>
                  <li>SHORT FORM CLIPS</li>
                  <li>LONG FORM</li>
                  <li>AUDIO</li>
                  <li>PROJECT MANAGEMENT</li>
                  <li>TIKTOK VIDEO EDITING</li>
               </ul>
            </div>
            <div className="explore-services-btn-container">
               <button
                  className="explore-services-btn"
                  onClick={() => (window.location.href = "/services")}
               >
                  EXPLORE ALL OUR EXCITING SERVICES!
               </button>
               <img
                  src={videoEditorImage2}
                  alt="Service Overview"
                  className="services-overview-image"
               />
            </div>
         </div>
      </div>

      <div className="short-videos-section">
         <h2>SHORT VIDEOS & TIKTOKS</h2>
         <div className="video-container">
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/bTi_OD9R1ZE"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            ></iframe>
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/tN6iz9P6A3c"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            ></iframe>
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/okyYbCBIwFo"
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            ></iframe>
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/fPMvyeEZ9Hc"
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            ></iframe>
         </div>
      </div>
      <div className="contact-section">
         <div className="contact-text">TEXT US ANYTIME AT 200-CLOSEDMO</div>
         <img
            src={videoEditorImage}
            alt="Video Editor"
            className="editor-image"
         />
         <div className="contact-info">
            <p>GOT A PROJECT IN MIND?</p>
            <p>LET'S TALK AND TURN YOUR VISION INTO REALITY.</p>
            <p>REACH OUT TO US AND GET YOUR QUOTE TODAY!</p>
         </div>
      </div>
      <div className="testimonials">
         <h2>WHAT OUR CLIENTS SAY</h2>
         <Slider {...settings}>
            <div className="testimonial-container">
               <div className="avatar"></div>
               <div className="testimonial-text">
                  <p>
                     "Closed On Mondays provided exceptional editing services
                     for our corporate videos. Highly recommended!"
                  </p>
               </div>
               <div className="testimonial-author">
                  - JOHN DOE, CEO OF ABC CORP
               </div>
            </div>
            <div className="testimonial-container">
               <div className="avatar"></div>
               <div className="testimonial-text">
                  <p>
                     "The attention to detail and creativity brought our
                     documentary to life. Can't wait for our next project!"
                  </p>
               </div>
               <div className="testimonial-author">
                  - JANE SMITH, DOCUMENTARY PRODUCER
               </div>
            </div>
            <div className="testimonial-container">
               <div className="avatar"></div>
               <div className="testimonial-text">
                  <p>
                     "Their quick turnaround and innovative approach made a huge
                     impact on our marketing campaign."
                  </p>
               </div>
               <div className="testimonial-author">
                  - MICHAEL LEE, MARKETING DIRECTOR
               </div>
            </div>
         </Slider>
      </div>
   </div>
);

export default HomePage;
