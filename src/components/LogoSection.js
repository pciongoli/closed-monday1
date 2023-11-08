// LogoSection.js
import React from "react";
import instagramReelsLogo from "../assets/image/instagram-reels-logo.png"; // Update the import paths as necessary
import tiktokLogo from "../assets/image/tiktok-logo.png";
import youtubeShortsLogo from "../assets/image/youtube-shorts-logo.png";
import spotifyLogo from "../assets/image/spotify-logo.png";

const LogoSection = () => (
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
      <a
         href="https://www.spotify.com"
         target="_blank"
         rel="noopener noreferrer"
      >
         <img src={spotifyLogo} alt="YouTube Shorts Logo" className="logo" />
      </a>
   </div>
);

export default LogoSection;
