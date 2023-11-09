import React from "react";
import "../styles/PortfolioPage.css"; // Ensure the path to your CSS file is correct

const UnifiedMediaSection = ({ projects, renderMedia }) => {
   return (
      <section id="unified-media" className="portfolio">
         <div className="projects">
            {projects.map((project, index) => (
               <div className="project" key={index}>
                  {renderMedia(project)}
               </div>
            ))}
         </div>
      </section>
   );
};

export default UnifiedMediaSection;
