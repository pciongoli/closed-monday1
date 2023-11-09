import React from "react";
import JohnnyDrinksImage from "../assets/image/johnny-drinks.png";
import UnderTheInfluenceImage from "../assets/image/under-the-influence.png";
import SuburbTalksImage from "../assets/image/suburb-talks.png";
import "../styles/CollaboratorSection.css";

const CollaboratorSection = () => {
   return (
      <div className="collaborators-section">
         <h2 className="buddies">OUR COLLABORATORS</h2>
         <div className="collaborators-container">
            <div className="collaborator">
               <a
                  href="https://www.johnnydrinks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img src={JohnnyDrinksImage} alt="Collaborator 1" />
               </a>
            </div>
            <div className="collaborator">
               <a
                  href="https://undertheinfluence.show/en-usd/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img src={UnderTheInfluenceImage} alt="Collaborator 2" />
               </a>
            </div>
            <div className="collaborator">
               <a
                  href="https://www.youtube.com/@suburbtalks623"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img src={SuburbTalksImage} alt="Collaborator 3" />
               </a>
            </div>
         </div>
      </div>
   );
};

export default CollaboratorSection;
