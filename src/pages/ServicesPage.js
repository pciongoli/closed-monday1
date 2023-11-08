// src/pages/ServicesPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ServicesPage.css";

const ServicesPage = () => {
   const [activeDropdown, setActiveDropdown] = useState(null);

   const servicesData = [
      {
         title: "Full podcast production",
         description:
            "High-quality full podcast production to cater to your specific needs.",
         price: "Starting at $500",
         details: [
            "Conceptualization: Helping you decide on themes, topics, and format",
            "Recording: High-quality audio recording with multiple mics setup",
            "Editing: Removing pauses, filler words, and enhancing audio quality",
            "Mixing: Adding intros, outros, music, and effects for a professional touch",
            "Distribution: Publishing to platforms like Spotify, Apple Podcasts, and Google Podcasts",
            "Promotion: Assisting in creating promotional content for social media",
         ],
      },
      {
         title: "Short form clips",
         description: "Engaging short form clips tailored for your audience.",
         price: "Starting at $150",
         details: [
            "Snippet Creation: Extracting key moments from long-form content",
            "Optimization: Tailoring for platforms like Instagram, Twitter, and TikTok",
            "Captions: Adding subtitles for accessibility and engagement",
            "Graphics: Incorporating branding and animations for better appeal",
         ],
      },
      {
         title: "Long form",
         description: "Detailed long form content to dive deep into topics.",
         price: "Starting at $700",
         details: [
            "In-depth Analysis: Covering topics in detail with thorough research",
            "Guest Integration: Incorporating interviews and discussions",
            "Scripting: Structured content flow for cohesive understanding",
            "Visual Elements: Incorporating relevant graphics and visual aids",
         ],
      },
      {
         title: "Audio",
         description: "Crystal clear audio services for a range of needs.",
         price: "Starting at $300",
         details: [
            "Recording: Studio-quality recording services for various needs",
            "Editing: Removing noise, enhancing clarity, and improving audio quality",
            "Mastering: Ensuring consistent and optimal sound across content",
            "Sound Effects: Adding relevant sound effects for immersive experiences",
         ],
      },
      {
         title: "Project management",
         description:
            "Efficient project management to ensure timely deliveries.",
         price: "Starting at $400",
         details: [
            "Planning: Structured timelines and milestones for content production",
            "Coordination: Streamlining communication among different teams",
            "Quality Assurance: Ensuring high-quality content production",
            "Delivery: Timely content delivery and distribution",
         ],
      },
      {
         title: "TikTok video editing",
         description:
            "Trendy TikTok video edits to boost your online presence.",
         price: "Starting at $200",
         details: [
            "Trend Analysis: Staying updated with the latest TikTok trends",
            "Editing: Creating engaging short videos tailored for TikTok's audience",
            "Music Integration: Adding trending music and sound effects",
            "Graphics: Incorporating animations and visual elements for higher engagement",
         ],
      },
   ];

   return (
      <div className="services">
         <h1>Our Services</h1>
         {servicesData.map((service) => (
            <Service key={service.title} data={service} />
         ))}
      </div>
   );
};

const Service = ({ data }) => {
   return (
      <div className="service-item">
         <div className="service-content">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <div className="dropdown-content">
               <ul>
                  {data.details.map((detail, index) => (
                     <li key={index}>{detail}</li>
                  ))}
               </ul>
               <Link to="/contact" className="quote-btn">
                  Get a Quote!
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ServicesPage;
