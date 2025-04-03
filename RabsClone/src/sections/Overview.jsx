import React, { useEffect, useRef } from "react";
import "../styles/overview.css";
import records from "../assets/records.png";
import mapImage from "../assets/map.gif";
import Arrow from "../assets/arrow.png";

const Overview = () => {
  const ratingRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    // Animation sequence for stats to appear one by one
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            if (ratingRef.current) ratingRef.current.classList.add('animate-stat');
            
            setTimeout(() => {
              if (projectsRef.current) projectsRef.current.classList.add('animate-stat');
              
              setTimeout(() => {
                if (experienceRef.current) experienceRef.current.classList.add('animate-stat');
              }, 200); // Delay for experience stat
            }, 200); // Delay for projects stat
          }, 100); // Initial delay
        }
      },
      { threshold: 0.1 }
    );

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, []);

  return (
    <section className="overview-container" id="overview">
      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee">
          <img src={records} alt="Record" className="icon" /> 
          Absolutely! World-Leading Website Designers at Your Service 
          <img src={records} alt="Record" className="icon" />
        </div>
      </div>

      {/* Our Existence Heading */}
      <div className="existence-title">
        <h2>Our Existence</h2>
      </div>

      {/* Main Overview Section */}
      <div className="overview-content">
        <div className="overview-box">
          {/* Left Side - Company Stats */}
          <div className="stats-container">
            <div className="stat-item" ref={ratingRef}>
              <h2 className="stat-number">4.9/5</h2>
              <div className="stars">★★★★☆</div>
            </div>
            
            <div className="stat-item" ref={projectsRef}>
              <h2 className="stat-number">10000+</h2>
              <p className="stat-text">Total Project Complete</p>
            </div>
            
            <div className="stat-item" ref={experienceRef}>
              <h2 className="stat-number">12+</h2>
              <p className="stat-text">Years of Experience</p>
            </div>
          </div>

          {/* Right Side - Map Image */}
          <div className="map-container">
            <img src={mapImage} alt="Company Presence Map" className="map-image" />
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="company-info">
        <h3>A Website Design-First Integrated Business Promotion Company</h3>
        <p>
          RABS Net Solutions Pvt. Ltd. is a full-service website design agency based in Mumbai, India. An agency with a strong growth trajectory and mindset, 
          we are a team of passionate strategists, marketers, communicators, and technologists. We collaborate with our clients in India and abroad on 
          strategies and tactics to achieve measurable business results. <span className="tagline">"Let's make website design magic together."</span>
        </p>
      </div>


      {/* Scroll Down Arrow */}
      <div className="scroll-indicator">
        <img src={Arrow} alt="Scroll Down" className="arrow-icon" />
      </div>
    </section>
  );
};

export default Overview;