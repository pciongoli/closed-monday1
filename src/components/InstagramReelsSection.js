import React from "react";
import "../styles/PortfolioPage.css";

const InstagramReelsSection = ({ projects, renderMedia }) => (
   <section id="instagram-reels">
      <h2>INSTAGRAM REELS</h2>
      <div className="projects">
         {projects
            .filter((p) => p.type === "instagram_reel")
            .map((project, index) => (
               <div className="project" key={index}>
                  <div className="media-preview">{renderMedia(project)}</div>
               </div>
            ))}
      </div>
   </section>
);

export default InstagramReelsSection;
