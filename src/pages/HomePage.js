// HomePage.js
import React, { useEffect } from "react";
import ServicesOverview from "../components/ServicesOverview";
import UnifiedMediaSection from "../components/UnifiedMediaSection";
import CollaboratorSection from "../components/CollaboratorSection";
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
            {/* <h2>A LITTLE TASTE OF WHAT WE DO</h2> */}
            {/* Logos Section */}
            <LogoSection />
            {/* Unified Media Section */}
            <UnifiedMediaSection
               projects={projects}
               renderMedia={renderMedia}
            />

            {/* Filter and pass only youtube_short type projects to YouTubeShortsSection */}
            {/* <YouTubeShortsSection
               projects={projects.filter((p) => p.type === "youtube_short")}
               renderMedia={renderMedia}
            /> */}

            {/* Filter and pass only instagram_reel type projects to InstagramReelsSection */}
            {/* <InstagramReelsSection
               projects={projects.filter((p) => p.type === "instagram_reel")}
               renderMedia={renderMedia}
            /> */}

            {/* Filter and pass only tiktok type projects to TikTokSection */}
            {/* <TikTokVideosSection
               projects={projects.filter((p) => p.type === "tiktok_video")}
               renderMedia={renderMedia}
            /> */}
            {/* Filter and pass only iframe type projects to PodcastSection */}
            {/* <PodcastSection
               projects={projects.filter((p) => p.type === "iframe")}
               renderMedia={renderMedia}
            /> */}
         </div>
         {/* Collaborator Section */}
         <CollaboratorSection />
      </div>
   );
};

export default HomePage;
