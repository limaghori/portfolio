import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show a success message to the user
    setStatusMessage("✨ Thank you! Your message has been sent successfully.");
    
    // Clear the form fields after submission
    setFormData({ name: "", email: "", message: "" });

    // Clear the success message after 4 seconds
    setTimeout(() => setStatusMessage(""), 4000);
  };

  return (
    <div className="contact-container" style={{ direction: 'ltr', textAlign: 'left' }}>
      <h2>Contact Me</h2>
      <p className="contact-desc">Have a question or want to work together? Leave a message below!</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user-name">Full Name</label>
          <input 
            type="text" 
            id="user-name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            required 
            aria-required="true"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="user-email">Email Address</label>
          <input 
            type="email" 
            id="user-email" 
            name="email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
            aria-required="true"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="user-message">Your Message</label>
          <textarea 
            id="user-message" 
            name="message" 
            rows="5" 
            value={formData.message}
            onChange={handleInputChange}
            required 
            aria-required="true"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" aria-label="Send message via contact form">
          Send Message
        </button>
      </form>

      {/* Interactive notification message */}
      {statusMessage && (
        <div style={{
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#d1fae5',
          color: '#065f46',
          borderRadius: '6px',
          fontWeight: '600',
          textAlign: 'center',
          border: '1px solid #10b981'
        }}>
          {statusMessage}
        </div>
      )}
    </div>
  );
}

export default Contact;