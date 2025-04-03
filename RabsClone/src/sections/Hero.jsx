import React, { useState } from 'react';
import '../styles/hero.css';
import arrowIcon from '../assets/arrow.png'; // Assuming you have this image
import whatsappIcon from '../assets/whatsapp.png'; // Assuming you have this icon
import phoneIcon from '../assets/phone.png'; // Assuming you have this icon
import ContactForm from './ContactForm';

const Hero = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="discuss-btn-container">
          <button className="discuss-btn-top" onClick={openContactForm}>
            Let's Discuss Your Project
          </button>
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            Elevate Your Digital Presence
          </h1>
          <h2 className="hero-subtitle">
            Impactful Innovation,Seamless{" "}
           Experiences
          </h2>
        </div>

        <div className="service-buttons">
          <button className="service-btn">Wordpress Developement</button>
          <button className="service-btn">UI - UX Design</button>
          <button className="service-btn">Real Estate CRM</button>
          <button className="service-btn">PHP & React Website</button>
        </div>

        <div className="arrow-container">
          <img src={arrowIcon} alt="Scroll down" className="arrow-icon" />
        </div>

        <div className="contact-buttons">
          <a href="https://wa.me/yourphonenumber" className="contact-icon whatsapp">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="tel:yourphonenumber" className="contact-icon phone">
            <img src={phoneIcon} alt="Phone" />
          </a>
        </div>

        <button className="interested-btn" onClick={openContactForm}>
          I'm Interested
        </button>
      </div>

      {showContactForm && (
        <ContactForm onClose={closeContactForm} />
      )}
    </div>
  );
};

export default Hero;