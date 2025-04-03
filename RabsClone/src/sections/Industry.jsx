import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/industry.css";

// Industry Icons
import financeIcon from "../assets/finance-icon.png";
import realEstateIcon from "../assets/realestate-icon.png";
import technologyIcon from "../assets/technology-icon.png";
import educationIcon from "../assets/education-icon.png";
import foodIcon from "../assets/food-icon.png";
import telecomIcon from "../assets/telecom-icon.png";

// Industry Background Images
import financeBg from "../assets/finance.jpg";
import realEstateBg from "../assets/realestate.jpg";
import technologyBg from "../assets/technology.jpg";
import educationBg from "../assets/education.jpg";
import foodBg from "../assets/food.jpg";
import telecomBg from "../assets/telecom.jpg";

// Industry Data
const industries = [
  {
    title: "FINANCE",
    image: financeBg,
    description: "Secure and innovative financial solutions to empower businesses and individuals alike.",
    icon: financeIcon,
  },
  {
    title: "REAL ESTATE",
    image: realEstateBg,
    description: "Bringing real estate into the digital era with innovative and engaging platforms.",
    icon: realEstateIcon,
  },
  {
    title: "TECHNOLOGY",
    image: technologyBg,
    description: "Pioneering technological advancements to drive innovation and efficiency worldwide.",
    icon: technologyIcon,
  },
  {
    title: "EDUCATION TECHNOLOGY",
    image: educationBg,
    description: "Empowering education with cutting-edge technology and interactive learning experiences.",
    icon: educationIcon,
  },
  {
    title: "FOOD INDUSTRY",
    image: foodBg,
    description: "Savor success online! RABS whips up visually appetizing websites for the food industry.",
    icon: foodIcon,
  },
  {
    title: "TELECOMMUNICATIONS",
    image: telecomBg,
    description: "Revolutionizing connectivity with seamless telecommunication solutions for global reach.",
    icon: telecomIcon,
  },
];

// Background slideshow images
const backgroundImages = [financeBg, realEstateBg, technologyBg, educationBg, foodBg, telecomBg];

const Industry = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="industry-section" style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}>
      <h2 className="text-center text-white">
        Industries <span className="highlight">We've</span> Worked For
      </h2>

      <div className="container">
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            pagination: true,
            arrows: true,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
        >
          {industries.map((industry, index) => (
            <SplideSlide key={index}>
              <div className="industry-card">
                <div className="industry-thumb" style={{ backgroundImage: `url(${industry.image})` }}>
                  
                  <h4 className="industry-title">{industry.title}</h4>
                </div>
                <div className="industry-hover">
                  <h4>{industry.title}</h4>
                  <p>{industry.description}</p>
                  <img src={industry.icon} alt="Icon" className="industry-icon" />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Industry;
