// TikTokVideosSection.js
import React from "react";
import "../styles/PortfolioPage.css"; // Assuming TikTok styles are here

const TikTokVideosSection = ({ projects, renderMedia }) => (
   <section id="tiktok-videos">
      <h2>TikTok Videos</h2>
      <div className="projects">
         {projects
            .filter((p) => p.type === "tiktok_video")
            .map((project, index) => (
               <div className="project" key={index}>
                  {renderMedia(project)}
               </div>
            ))}
      </div>
   </section>
);

export default TikTokVideosSection;
