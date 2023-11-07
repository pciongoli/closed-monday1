import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className="navbar">
         <div className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
         </div>
         {/* Toggle "hide" class based on "isOpen" state */}
         <div className={`nav-logo ${isOpen ? "hide" : ""}`}>
            <Link to="/" className="navbar-logo-link">
               CLOSED MONDAY
            </Link>
         </div>
         {/* The nav-links should toggle visibility */}
         <ul className={`nav-links ${isOpen ? "show" : ""}`}>
            <li>
               <Link to="/services">Services</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
