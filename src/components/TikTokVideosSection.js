// TikTokVideosSection.js
import React from "react";
import "../styles/PortfolioPage.css"; // Assuming TikTok styles are here

const TikTokVideosSection = ({ projects, renderMedia }) => (
   <section id="tiktok-videos">
      <h2>TIKTOK VIDEOS</h2>
      <div className="projects">
         {projects
            .filter((p) => p.type === "tiktok_video")
            .map((project, index) => (
               <div className="project tiktoks" key={index}>
                  {renderMedia(project)}
               </div>
            ))}
      </div>
   </section>
);

export default TikTokVideosSection;
