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
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-details">{project.details}</p>
                  <p className="technical-details">
                     {project.technicalDetails}
                  </p>
               </div>
            ))}
      </div>
   </section>
);

export default PodcastSection;
