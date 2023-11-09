import React from "react";

export const renderMedia = (project) => {
   switch (project.type) {
      case "youtube_short":
         return (
            <iframe
               title={project.title}
               style={{ borderRadius: "12px" }}
               width="100%"
               height="600"
               src={project.mediaUrl}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               frameBorder="0"
            />
         );
      case "instagram_reel":
         // Assuming Instagram Reels are also embedded iframes, replace with actual rendering logic if different
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
      case "tiktok_video":
         // Replace with TikTok video embedding logic
         return (
            <blockquote
               className="tiktok-embed"
               cite={project.mediaUrl}
               data-video-id={project.mediaUrl.split("/").pop()}
               style={{ maxWidth: "605px", minWidth: "325px" }}
               muted
               autoplay="0"
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
      case "iframe":
         // Podcasts are already iframes, so we just return the iframe
         return (
            <iframe
               title={project.title}
               style={{ borderRadius: "12px" }}
               width="100%"
               height="600"
               src={project.mediaUrl}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               frameBorder="0"
            />
         );
      default:
         return <div>Unsupported media type</div>;
   }
};
