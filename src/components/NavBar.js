import LogoImage from "../assets/image/hero-logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [visible, setVisible] = useState(false); // Initialize visibility to false

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
         setVisible(true); // Make the navbar visible once scrolled
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove the event listener
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []); // Empty array ensures this effect runs only once after the initial render

   return (
      <nav className={`navbar ${visible ? "visible" : ""}`}>
         <div className="nav-logo">
            <Link to="/" className="navbar-logo-link">
               <img src={LogoImage} alt="Logo" className="navbar-logo-image" />
            </Link>
         </div>
         <div className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
         </div>
         <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li>
               <a href="/portfolio">Portfolio</a>
            </li>
            <li>
               <a href="/services">Services</a>
            </li>
            <li>
               <a href="/contact">Contact</a>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
