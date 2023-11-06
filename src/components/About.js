// src/pages/About.js
import React from "react";
import "../styles/About.css";

const About = () => {
   return (
      <div className="about-container">
         <h1>About Us</h1>
         <p>
            Welcome to ClosedMonday, the creative hub where innovative ideas
            come to life. Founded in 2015, we are a dedicated team of creators,
            thinkers, and storytellers, committed to delivering exceptional
            content that resonates with audiences worldwide.
         </p>
         <div className="about-section">
            <h2>Our Vision</h2>
            <p>
               At ClosedMonday, we envision a world where content breaks
               barriers and creates meaningful connections. We believe in the
               power of storytelling to shape perspectives, inspire action, and
               drive change.
            </p>
         </div>
         <div className="about-section">
            <h2>Our Journey</h2>
            <p>
               From humble beginnings as a small podcast production house, we
               have evolved into a multimedia powerhouse, producing content
               across various platforms and genres. Our journey has been marked
               by relentless passion, innovation, and a commitment to
               excellence.
            </p>
         </div>
         <div className="about-section">
            <h2>Join Us</h2>
            <p>
               Are you a creative enthusiast looking to make a mark? Discover
               exciting opportunities with us and be a part of our ever-growing
               family.
            </p>
         </div>
      </div>
   );
};

export default About;
