import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
   // State to store form data
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   // Update form data on input change
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   // Handle form submission
   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const response = await fetch("https://your-api-gateway-url/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const responseData = await response.json();
         console.log(responseData);
         // Handle success (e.g., show a success message)
         alert("Message sent successfully!");
         // Reset form data
         setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
         });
      } catch (error) {
         console.error(error);
         // Handle error (e.g., show an error message)
         alert("Failed to send message. Please try again later.");
      }
   };

   return (
      <div className="contact">
         <h1>Contact Us</h1>
         <div className="contact-content">
            <div className="contact-form">
               <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     required
                     value={formData.name}
                     onChange={handleChange}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     value={formData.email}
                     onChange={handleChange}
                  />
                  <label htmlFor="subject">Subject:</label>
                  <input
                     type="text"
                     id="subject"
                     name="subject"
                     value={formData.subject}
                     onChange={handleChange}
                  />
                  <label htmlFor="message">Message:</label>
                  <textarea
                     id="message"
                     name="message"
                     rows="5"
                     required
                     value={formData.message}
                     onChange={handleChange}
                  ></textarea>
                  <button type="submit">Submit</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ContactPage;
