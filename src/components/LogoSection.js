// LogoSection.js
import React from "react";
import instagramReelsLogo from "../assets/image/instagram-reels-logo.png"; // Update the import paths as necessary
import tiktokLogo from "../assets/image/tiktok-logo.png";
import youtubeShortsLogo from "../assets/image/youtube-shorts-logo.png";
import spotifyLogo from "../assets/image/spotify-logo.png";

const LogoSection = () => (
   <div className="logos-section">
      ={" "}
      <img src={youtubeShortsLogo} alt="YouTube Shorts Logo" className="logo" />
      <img
         src={instagramReelsLogo}
         alt="Instagram Reels Logo"
         className="logo"
      />
      <img src={tiktokLogo} alt="TikTok Logo" className="logo" />
      <img src={spotifyLogo} alt="YouTube Shorts Logo" className="logo" />
   </div>
);

export default LogoSection;
