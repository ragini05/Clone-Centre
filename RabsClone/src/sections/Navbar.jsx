import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/phone.png"; // Ensure you have a phone icon in assets

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container-fluid rabs-header">
        {/* Logo - Click to scroll to Hero */}
        <a className="navbar-brand" href="#hero">
          <img src={logo} alt="RabsClone Logo" className="nav-logo" />
        </a>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#overview">Overview</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#approach">Our Approach</a></li>
          <li className="nav-item"><a className="nav-link" href="#review">Review</a></li>
          <li className="nav-item"><a className="nav-link" href="#aboutus">About Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
        </ul>

        {/* Call Section */}
        <div className="navbar-call">
          <a href="tel:+919833636916" className="call-icon">
            <img src={phoneIcon} alt="Call Icon" className="phone-img" />
          </a>
          <a href="tel:+919833636916" className="call-link">
            Let's Talk +91 98336 36916
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
