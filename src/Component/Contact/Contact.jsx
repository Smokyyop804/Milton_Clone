import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="info-description">
            Have questions about our products? We're here to help. Contact us
            through any of the following channels.
          </p>

          <div className="info-items">
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <div className="info-text">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <div className="info-text">
                <h3>Email</h3>
                <p>info@milton.com</p>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
              <div className="info-text">
                <h3>Address</h3>
                <p>123 Water Street, Hydration City, HC 12345</p>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faClock} className="info-icon" />
              <div className="info-text">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
