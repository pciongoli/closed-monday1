import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom to create clickable links

const Footer = () => (
   <footer className="footer">
      <div className="footer-content">
         {/* Making the logo a link to the homepage */}
         <Link to="/" className="footer-logo-link">
            <div className="footer-logo">Closed Monday</div>
         </Link>
         <div>
            <Link to="/about" className="footer-link">
               About Us
            </Link>
            <Link to="/careers" className="footer-link">
               Careers
            </Link>
            {/* <Link to="/contact" className="footer-link">
               Contact
            </Link> */}
         </div>
         <div className="footer-contact">
            <p className="email">Email: joe@closedmonday.media</p>
            <p className="copyright">
               © 2023 Closed Monday. All rights reserved.
            </p>
         </div>
         <div className="footer-icons">
            <a
               href="https://www.instagram.com/closedmondayllc/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-instagram"></i>
            </a>
         </div>
      </div>
   </footer>
);

export default Footer;
