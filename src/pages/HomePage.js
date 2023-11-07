// HomePage.js
import React from "react";
import videoEditorImage from "../assets/image/video-editor-img2.png";
import videoEditorImage2 from "../assets/image/video-editor-img3.png";
import PodcastSection from "../components/PodcastSection"; // Corrected import path
import YouTubeShortsSection from "../components/YouTubeShortsSection"; // Corrected import path
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

const projects = [
   {
      mediaUrl:
         "https://open.spotify.com/embed/show/7xuYMlfFAXUfReoHKGHjb6?utm_source=generator",
      title: "JOHNNY DRINKS",
      details: "Description for JOHNNY DRINKS...",
      technicalDetails: "Technical details...",
      type: "iframe",
   },
   {
      mediaUrl:
         "https://open.spotify.com/embed/show/5NDVTKGjiZhrth5hJbfvsA/video?utm_source=generator",
      title: "UNDER THE INFLUENCE",
      details: "Description for UNDER THE INFLUENCE...",
      technicalDetails: "Technical details...",
      type: "iframe",
   },
   {
      mediaUrl:
         "https://open.spotify.com/embed/show/4YLbUxILwRNN9e1UUCDV1D?utm_source=generator",
      title: "SUBURB TALKS",
      details: "Description for SUBURB TALKS...",
      technicalDetails: "Technical details...",
      type: "iframe",
   },
   ,
   {
      mediaUrl: "https://www.youtube.com/embed/bTi_OD9R1ZE",
      title: "YouTube Short 1",
      type: "youtube_short",
   },
   {
      mediaUrl: "https://www.youtube.com/embed/tN6iz9P6A3c",
      title: "YouTube Short 2",
      type: "youtube_short",
   },
   {
      mediaUrl: "https://www.youtube.com/embed/okyYbCBIwFo",
      title: "YouTube Short 3",
      type: "youtube_short",
   },
   {
      mediaUrl: "https://www.youtube.com/embed/fPMvyeEZ9Hc",
      title: "YouTube Short 4",
      type: "youtube_short",
   },
];

const renderMedia = (project) => {
   if (project.type === "video") {
      return (
         <video controls>
            <source src={project.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
      );
      {
         /* YouTube Shorts Section */
      }
   } else if (project.type === "youtube_short") {
      return (
         <iframe
            title={project.title}
            style={{ borderRadius: "12px" }}
            width="100%"
            height="352"
            src={project.mediaUrl}
            allowFullScreen=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         ></iframe>
      );
   } else if (project.type === "tiktok") {
      return (
         <iframe
            title="TikTok Widget"
            width="200"
            height="400"
            src={project.mediaUrl}
            allowFullScreen=""
         ></iframe>
      );
   } else if (project.type === "audio") {
      return <audio controls src={project.mediaUrl}></audio>;
   } else if (project.type === "iframe") {
      return (
         <iframe
            title="Spotify Widget - Portfolio 1"
            style={{ borderRadius: "12px" }}
            width="100%"
            height="352"
            src={project.mediaUrl}
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
         ></iframe>
      );
   }
};

const HomePage = () => (
   <div className="home">
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

      <div className="portfolio">
         <h2>Portfolio</h2>
         {/* Use the new PodcastSection component */}
         <PodcastSection projects={projects} renderMedia={renderMedia} />
         {/* Use the new YouTubeShortsSection component */}
         <YouTubeShortsSection projects={projects} renderMedia={renderMedia} />
      </div>

      <div className="clients-section">
         <h2>OUR COLLABORATORS</h2>
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
   </div>
);

export default HomePage;
