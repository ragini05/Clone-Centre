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
          // First show rating
          if (ratingRef.current) {
            setTimeout(() => {
              ratingRef.current.classList.add('animate-stat');
              
              // Then show projects
              if (projectsRef.current) {
                setTimeout(() => {
                  projectsRef.current.classList.add('animate-stat');
                  
                  // Finally show experience
                  if (experienceRef.current) {
                    setTimeout(() => {
                      experienceRef.current.classList.add('animate-stat');
                    }, 300);
                  }
                }, 300);
              }
            }, 300);
          }
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
      <div className="overview-content">
        <div className="overview-box">
          {/* Left Side - Company Stats */}
          <div className="stats-container">
            <div className="stat-item" ref={ratingRef}>
              <div className="stat-blue-line"></div>
              <div className="stat-content">
                <h2 className="stat-number">4.9/5</h2>
                <div className="stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star">★</span>
                </div>
              </div>
            </div>
            
            <div className="stat-item" ref={projectsRef}>
              <div className="stat-blue-line"></div>
              <div className="stat-content">
                <h2 className="stat-number">10000+</h2>
                <p className="stat-text">Total Project Complete</p>
              </div>
            </div>
            
            <div className="stat-item" ref={experienceRef}>
              <div className="stat-blue-line"></div>
              <div className="stat-content">
                <h2 className="stat-number">12+</h2>
                <p className="stat-text">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side - Map Image */}
          <div className="map-container">
            <img src={mapImage} alt="Company Presence Map" className="map-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;