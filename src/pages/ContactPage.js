// src/pages/ContactPage.js
import React from "react";
import "../styles/ContactPage.css";

const ContactPage = () => (
   <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-content">
         <div className="contact-form">
            <form>
               <label htmlFor="name">Name:</label>
               <input type="text" id="name" name="name" required />
               <label htmlFor="email">Email:</label>
               <input type="email" id="email" name="email" required />
               <label htmlFor="subject">Subject:</label>
               <input type="text" id="subject" name="subject" />
               <label htmlFor="message">Message:</label>
               <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
               ></textarea>
               <button type="submit">Submit</button>
            </form>
         </div>
         <div className="contact-details">
            <h2>Contact Details</h2>
            <p>Phone: +1 234 567 890</p>
            <p>Email: contact@videoeditor.com</p>
            <p>Address: 123 Video Lane, Edit City, VC 12345</p>
         </div>
      </div>
   </div>
);

export default ContactPage;
