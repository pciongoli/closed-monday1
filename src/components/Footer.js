import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom to create clickable links

const Footer = () => (
   <footer className="footer">
      <div className="footer-content">
         {/* Making the logo a link to the homepage */}
         <Link to="/" className="footer-logo-link">
            <div className="footer-logo">ClosedMonday</div>
         </Link>
         <div>
            <Link to="/about" className="footer-link">
               About Us
            </Link>
            <Link to="/careers" className="footer-link">
               Careers
            </Link>
            <Link to="/contact" className="footer-link">
               Contact
            </Link>
         </div>
         <div className="footer-contact">
            <p className="email">Email: contact@closedmonday.media</p>
            <p className="phone">Phone: +123 456 7890</p>
            <p className="copyright">
               © 2023 Closed Monday. All rights reserved.
            </p>
         </div>
         <div className="footer-icons">
            <a
               href="https://facebook.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-facebook-f"></i>
            </a>
            <a
               href="https://twitter.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-twitter"></i>
            </a>
            <a
               href="https://instagram.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-instagram"></i>
            </a>
            <a
               href="https://linkedin.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-linkedin-in"></i>
            </a>
         </div>
      </div>
   </footer>
);

export default Footer;
