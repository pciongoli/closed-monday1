import React from "react";
import "../styles/PortfolioPage.css";

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
];

const PortfolioPage = () => {
   const renderMedia = (project) => {
      if (project.type === "video") {
         return (
            <video controls>
               <source src={project.mediaUrl} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
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

   return (
      <div className="portfolio">
         <h1>A little taste of what we do</h1>
         <div className="filters">
            <a href="#podcast">Podcast</a>
            <a href="#audio">Audio</a>
            <a href="#video">Video</a>
         </div>

         <section id="podcasts">
            <h2>Podcasts</h2>
            <div className="projects">
               {projects
                  .filter((p) => p.type === "iframe")
                  .map((project, index) => (
                     <div className="project" key={index}>
                        <div className="media-preview">
                           {renderMedia(project)}
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-details">{project.details}</p>
                        <p className="technical-details">
                           {project.technicalDetails}
                        </p>
                     </div>
                  ))}
            </div>
         </section>

         <section id="audio">
            <h2>Audio</h2>
            <div className="projects">
               {projects
                  .filter((p) => p.type === "audio")
                  .map((project, index) => (
                     <div className="project" key={index}>
                        <div className="media-preview">
                           {renderMedia(project)}
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-details">{project.details}</p>
                        <p className="technical-details">
                           {project.technicalDetails}
                        </p>
                     </div>
                  ))}
            </div>
         </section>
      </div>
   );
};

export default PortfolioPage;
