import React from "react";
import "../styles/PortfolioPage.css";

const PodcastSection = ({ projects, renderMedia }) => (
   <section id="podcasts">
      <h2>Podcasts</h2>
      <div className="projects">
         {projects
            .filter((p) => p.type === "iframe")
            .map((project, index) => (
               <div className="project" key={index}>
                  <div className="media-preview">{renderMedia(project)}</div>
               </div>
            ))}
      </div>
   </section>
);

export default PodcastSection;
