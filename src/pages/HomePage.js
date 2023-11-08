// HomePage.js
import React, { useEffect } from "react";
import videoEditorImage from "../assets/image/video-editor-img2.png";
import videoEditorImage2 from "../assets/image/video-editor-img3.png";
import PodcastSection from "../components/PodcastSection";
import YouTubeShortsSection from "../components/YouTubeShortsSection";
import InstagramReelsSection from "../components/InstagramReelsSection";
import TikTokVideosSection from "../components/TikTokVideosSection";
import instagramReelsLogo from "../assets/image/instagram-reels-logo.png";
import tiktokLogo from "../assets/image/tiktok-logo.png";
import youtubeShortsLogo from "../assets/image/youtube-shorts-logo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HomePage.css";

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

   {
      mediaUrl: "https://www.youtube.com/embed/tN6iz9P6A3c",
      title: "YouTube Short 1",
      type: "youtube_short",
   },
   {
      mediaUrl: "https://www.youtube.com/embed/7EdqyvAghNM",
      title: "YouTube Short 2",
      type: "youtube_short",
   },
   {
      mediaUrl: "https://www.youtube.com/embed/Fv3lbeAbgL0",
      title: "YouTube Short 3",
      type: "youtube_short",
   },

   {
      mediaUrl: "https://www.youtube.com/embed/Y6VzFJlylYE",
      title: "YouTube Short 4",
      type: "youtube_short",
   },
   {
      mediaUrl: "https://www.youtube.com/embed/WAj8kfyuSVc",
      title: "YouTube Short 5",
      type: "youtube_short",
   },

   {
      mediaUrl: "https://www.instagram.com/reel/CtH4gjyJ1CO/",
      title: "Instagram Reel 1",
      details: "Details for Instagram Reel 1",
      type: "instagram_reel",
   },
   {
      mediaUrl: "https://www.instagram.com/reel/Cup6wDJJJ9J/",
      title: "Instagram Reel 2",
      details: "Details for Instagram Reel 2",
      type: "instagram_reel",
   },
   {
      mediaUrl: "https://www.instagram.com/reel/CvxmhLhJ3l8/",
      title: "Instagram Reel 3",
      details: "Details for Instagram Reel 3",
      type: "instagram_reel",
   },
   {
      mediaUrl:
         "https://www.instagram.com/reel/Cx30PIkpfNv/?igshid=MzRlODBiNWFlZA%3D%3D",
      title: "Instagram Reel 4",
      details: "Details for Instagram Reel 4",
      type: "instagram_reel",
   },
   {
      mediaUrl:
         "https://www.instagram.com/reel/CxgAAzbO_aI/?igshid=MzRlODBiNWFlZA%3D%3D",
      title: "Instagram Reel 5",
      details: "Details for Instagram Reel 5",
      type: "instagram_reel",
   },
   {
      mediaUrl:
         "https://www.instagram.com/reel/Cytl8KKvKmP/?igshid=MzRlODBiNWFlZA%3D%3D",
      title: "Instagram Reel 6",
      details: "Details for Instagram Reel 6",
      type: "instagram_reel",
   },

   {
      mediaUrl:
         "https://www.tiktok.com/@undertheinfluence.show/video/7232422775192079662?_t=8h29EyGbWt0&_r=1",
      title: "TikTok Video 1",
      details: "Details for TikTok Video 1",
      type: "tiktok_video",
   },
   {
      mediaUrl:
         "https://www.tiktok.com/@undertheinfluence.show/video/7296577551827258667?_r=1&_t=8h2IGCBhRrH",
      title: "TikTok Video 2",
      details: "Details for TikTok Video 2",
      type: "tiktok_video",
   },
   {
      mediaUrl:
         "https://www.tiktok.com/@undertheinfluence.show/video/7250111950212828458?_r=1&_t=8h29IqLH7Nu",
      title: "TikTok Video 3",
      details: "Details for TikTok Video 3",
      type: "tiktok_video",
   },
   {
      mediaUrl:
         "https://www.tiktok.com/@undertheinfluence.show/video/7259489230374718762?_r=1&_t=8h29NIVrNpm",
      title: "TikTok Video 4",
      details: "Details for TikTok Video 4",
      type: "tiktok_video",
   },
   {
      mediaUrl:
         "https://www.tiktok.com/@undertheinfluence.show/video/7212799552053726507?_r=1&_t=8h29MBm4CMd",
      title: "TikTok Video 5",
      details: "Details for TikTok Video 5",
      type: "tiktok_video",
   },
   {
      mediaUrl:
         "https://www.tiktok.com/@undertheinfluence.show/video/7289150678889450794?_r=1&_t=8h297AoO1S2",
      title: "TikTok Video 6",
      details: "Details for TikTok Video 6",
      type: "tiktok_video",
   },
];

const renderMedia = (project) => {
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
      // Placeholder for Instagram embeds - the actual content will be rendered by Instagram's script
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
         >
            {/* Placeholder content, actual embed will be rendered by the script */}
         </blockquote>
      );
   } else if (project.type === "tiktok_video") {
      // Use the provided embed code directly instead of iframe
      return (
         <blockquote
            className="tiktok-embed"
            cite={project.mediaUrl}
            data-video-id={project.mediaUrl.split("/").pop()}
            style={{ maxWidth: "605px", minWidth: "325px" }}
         >
            {/* This section should replicate the structure provided by TikTok's embed code */}
            <section>
               <a target="_blank" href={project.mediaUrl.split("?")[0]}>
                  {project.title}
               </a>
               <p>{project.details}</p>
               {/* Include other elements as per the original embed code if necessary */}
            </section>
         </blockquote>
      );
   }
   return null;
};
const LogosSection = () => (
   <div className="logos-section">
      <a
         href="https://www.youtube.com"
         target="_blank"
         rel="noopener noreferrer"
      >
         <img
            src={youtubeShortsLogo}
            alt="YouTube Shorts Logo"
            className="logo"
         />
      </a>
      <a
         href="https://www.instagram.com"
         target="_blank"
         rel="noopener noreferrer"
      >
         <img
            src={instagramReelsLogo}
            alt="Instagram Reels Logo"
            className="logo"
         />
      </a>
      <a
         href="https://www.tiktok.com"
         target="_blank"
         rel="noopener noreferrer"
      >
         <img src={tiktokLogo} alt="TikTok Logo" className="logo" />
      </a>
   </div>
);

const HomePage = () => {
   useEffect(() => {
      const scripts = [
         { src: "https://www.instagram.com/embed.js", id: "instagram-script" },
         { src: "https://www.tiktok.com/embed.js", id: "tiktok-script" }, // Add this line for TikTok
      ];

      scripts.forEach(({ src, id }) => {
         if (!document.getElementById(id)) {
            const script = document.createElement("script");
            script.src = src;
            script.id = id;
            script.async = true;
            document.body.appendChild(script);
         }
      });

      return () => {
         scripts.forEach(({ id }) => {
            const scriptElement = document.getElementById(id);
            if (scriptElement) {
               scriptElement.remove();
            }
         });
      };
   }, []);

   return (
      <div className="home">
         <div className="services-overview">
            <h2>SERVICES WE OFFER</h2>
            <div className="services-container">
               <div className="services-list">
                  <ul>
                     <li>PODCAST PRODUCTION</li>
                     <li>AUDIO</li>
                     <li>SHORT FORM CLIPS</li>
                     <li>LONG FORM</li>
                     <li>PROJECT MANAGEMENT</li>
                     <li>TIKTOK , SHORTS , REELS</li>
                  </ul>
               </div>
               <div className="explore-services-btn-container">
                  <button
                     className="explore-services-btn"
                     onClick={() => (window.location.href = "/services")}
                  >
                     SEE ALL OF OUR SERVICES!
                  </button>
                  <img
                     src={videoEditorImage2}
                     alt="Service Overview"
                     className="services-overview-image"
                  />
               </div>
            </div>
         </div>

         <div className="portfolio">
            <h2>A LITTLE TASTE OF WHAT WE DO</h2>
            {/* Filter and pass only tiktok type projects to TikTokSection */}
            <TikTokVideosSection
               projects={projects.filter((p) => p.type === "tiktok_video")}
               renderMedia={renderMedia}
            />
            {/* Filter and pass only instagram_reel type projects to InstagramReelsSection */}
            <InstagramReelsSection
               projects={projects.filter((p) => p.type === "instagram_reel")}
               renderMedia={renderMedia}
            />
            {/* Filter and pass only youtube_short type projects to YouTubeShortsSection */}
            <YouTubeShortsSection
               projects={projects.filter((p) => p.type === "youtube_short")}
               renderMedia={renderMedia}
            />
            {/* Filter and pass only iframe type projects to PodcastSection */}
            <PodcastSection
               projects={projects.filter((p) => p.type === "iframe")}
               renderMedia={renderMedia}
            />
         </div>

         {/* Logos Section */}
         <LogosSection />

         <div className="collaborators-section">
            <h2 className="buddies">OUR COLLABORATORS</h2>
            <div className="collaborators-container">
               <div className="collaborator">
                  <img
                     src="path/to/temporary/image1.png"
                     alt="Collaborator 1"
                  />
                  <p>Collaborator Name 1</p>
               </div>
               <div className="collaborator">
                  <img
                     src="path/to/temporary/image2.png"
                     alt="Collaborator 2"
                  />
                  <p>Collaborator Name 2</p>
               </div>
               <div className="collaborator">
                  <img
                     src="path/to/temporary/image3.png"
                     alt="Collaborator 3"
                  />
                  <p>Collaborator Name 3</p>
               </div>
            </div>
         </div>

         <div className="contact-section">
            <div className="contact-text">
               TALK TO US AT INFO@CLOSEDMONDAY.MEDIA
            </div>
            <img
               src={videoEditorImage}
               alt="Video Editor"
               className="editor-image"
            />
            <div className="contact-info">
               <p>GOT A PROJECT IN MIND?</p>
               <p>LET'S TALK AND TURN YOUR VISION INTO REALITY.</p>
               <p>REACH OUT TO US AND GET YOUR QUOTE TODAY!</p>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
