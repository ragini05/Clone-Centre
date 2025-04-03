import React from "react";
import "../styles/about.css"; // Importing CSS

// Importing Images
import rehanImage from "../assets/rehan-halai.jpg";
import bilalImage from "../assets/bilal-halai.jpg";
import myBusinessIcon from "../assets/my-business-icon.png";
import arrow from "../assets/arrow.png";

const AboutUs = () => {
  return (
    <section className="about-us" id="aboutus">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>
            <span className="highlight">
              About the Founders</span>
            </h2>
          </div>
        </div>

        {/* Founder Cards */}
        <div className="row justify-content-center">
          {/* Rehan Halai */}
          <div className="col-lg-5 col-md-6">
            <div className="about-card">
              <img src={rehanImage} className="about-img" alt="Rehan Halai" />
              <h3 className="about-name">
                MR. REHAN HALAI
                <a href="https://mybusinessprofile.org/rehanhalai-1564" target="_blank" rel="noopener noreferrer">
                  <img src={myBusinessIcon} className="profile-icon" alt="Business Profile" />
                </a>
              </h3>
              <h4 className="about-title">DIRECTOR & FOUNDER</h4>
              <p className="about-description">
                Director and Founder of RABS Net Solutions, it’s my pleasure to introduce to you our dynamic
                organization with the solutions we offer. We always look forward to adding real value to your
                business through our analytical and inventive ways with every single project. We're committed
                to TAKING YOU FORWARD, with passion, innovation, and creating value for our Clients.
              </p>
            </div>
          </div>

          {/* Bilal Halai */}
          <div className="col-lg-5 col-md-6">
            <div className="about-card">
              <img src={bilalImage} className="about-img" alt="Bilal Halai" />
              <h3 className="about-name">
                MR. BILAL HALAI
                <a href="https://mybusinessprofile.org/bilalhalai-1403" target="_blank" rel="noopener noreferrer">
                  <img src={myBusinessIcon} className="profile-icon" alt="Business Profile" />
                </a>
              </h3>
              <h4 className="about-title">STRATEGY & RESEARCH ANALYST</h4>
              <p className="about-description">
                Bilal Halai is the brain behind the proprietary technology solution designed by the company for
                real estate channel partners. He leads the development and business development team and gives them
                critical insights which give this unique digital platform the cutting edge and helps stakeholders in
                the real estate business take their revenue to higher levels.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="col-12 hero-down-btn">
          <img src={arrow} className="arrow" alt="Scroll Down" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
