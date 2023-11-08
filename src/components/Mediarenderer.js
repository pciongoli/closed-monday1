// MediaRenderer.js
import React from "react";
import TikTokVideosSection from "./TikTokVideosSection"; // Update the import paths as necessary
import projects from "./ProjectsData"; // Ensure this is the correct path to ProjectsData.js

export const renderMedia = (project) => {
   if (project.type === "video") {
      return (
         <>
            <TikTokVideosSection
               projects={projects}
               renderMedia={renderMedia}
            />

            <video controls>
               <source src={project.mediaUrl} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </>
      );
   } else if (project.type === "youtube_short") {
      return (
         <iframe
            title={project.title}
            style={{ borderRadius: "12px" }}
            width="100%"
            height="352"
            src={project.mediaUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         ></iframe>
      );
   } else if (project.type === "audio") {
      return <audio controls src={project.mediaUrl}></audio>;
   } else if (project.type === "iframe") {
      return (
         <iframe
            title={project.title}
            style={{ borderRadius: "12px" }}
            width="100%"
            height="352"
            src={project.mediaUrl}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
         ></iframe>
      );
   } else if (project.type === "instagram_reel") {
      return (
         <blockquote
            className="instagram-media"
            data-instgrm-permalink={project.mediaUrl}
            data-instgrm-version="14"
            style={{
               maxWidth: "540px",
               minWidth: "326px",
               width: "calc(100% - 2px)",
            }}
         ></blockquote>
      );
   } else if (project.type === "tiktok_video") {
      return (
         <blockquote
            className="tiktok-embed"
            cite={project.mediaUrl}
            data-video-id={project.mediaUrl.split("/").pop()}
            style={{ maxWidth: "605px", minWidth: "325px" }}
         >
            <section>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.mediaUrl.split("?")[0]}
               >
                  {project.title}
               </a>
               <p>{project.details}</p>
            </section>
         </blockquote>
      );
   }
   return null;
};
