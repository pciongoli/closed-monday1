import React from "react";
import "../styles/PortfolioPage.css";

const YouTubeShortsSection = ({ projects, renderMedia }) => (
   <section>
      <h2>YOUTUBE SHORTS</h2>
      <div
         id="youtube-shorts"
         className="media-section youtube-short-container"
      >
         {projects
            .filter((project) => project.type === "youtube_short")
            .map(renderMedia)}
      </div>
   </section>
);

export default YouTubeShortsSection;
