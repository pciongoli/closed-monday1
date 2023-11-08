// HomePage.js
import React, { useEffect } from "react";
import ServicesOverview from "../components/ServicesOverview";
import PodcastSection from "../components/PodcastSection";
import YouTubeShortsSection from "../components/YouTubeShortsSection";
import InstagramReelsSection from "../components/InstagramReelsSection";
import TikTokVideosSection from "../components/TikTokVideosSection";
import videoEditorImage from "../assets/image/video-editor-img2.png";
import projects from "../components/ProjectsData";
import { renderMedia } from "../components/Mediarenderer";
import LogoSection from "../components/LogoSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HomePage.css";

const HomePage = () => {
   useEffect(() => {
      const scripts = [
         { src: "https://www.instagram.com/embed.js", id: "instagram-script" },
         { src: "https://www.tiktok.com/embed.js", id: "tiktok-script" },
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
         {/* services overview section */}
         <ServicesOverview />;
         <div className="portfolio">
            <h2>A LITTLE TASTE OF WHAT WE DO</h2>
            {/* Filter and pass only youtube_short type projects to YouTubeShortsSection */}
            <YouTubeShortsSection
               projects={projects.filter((p) => p.type === "youtube_short")}
               renderMedia={renderMedia}
            />

            {/* Filter and pass only instagram_reel type projects to InstagramReelsSection */}
            <InstagramReelsSection
               projects={projects.filter((p) => p.type === "instagram_reel")}
               renderMedia={renderMedia}
            />

            {/* Filter and pass only tiktok type projects to TikTokSection */}
            <TikTokVideosSection
               projects={projects.filter((p) => p.type === "tiktok_video")}
               renderMedia={renderMedia}
            />
            {/* Filter and pass only iframe type projects to PodcastSection */}
            <PodcastSection
               projects={projects.filter((p) => p.type === "iframe")}
               renderMedia={renderMedia}
            />
         </div>
         {/* Logos Section */}
         <LogoSection />
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

<ServicesOverview />;
export default HomePage;
