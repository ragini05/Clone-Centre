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
    description: "Navigate the digital financial landscape with RABS. Our websites are financial powerhouses, combining security and sophistication to communicate trust, reliability, and financial to your clients.",
    icon: financeIcon,
  },
  {
    title: "REAL ESTATE",
    image: realEstateBg,
    description: "Build your online foundation with RABS! Our construction-focused websites don't just showcase structures; they construct digital experiences, engaging visitors with architectural precision and project excellence.",
    icon: realEstateIcon,
  },
  {
    title: "TECHNOLOGY",
    image: technologyBg,
    description: "Elevate your digital presence with cutting-edge websites, tailored for the tech-savvy audience. RABS crafts innovative solutions that redefine user experiences and amplify your technological prowess.",
    icon: technologyIcon,
  },
  {
    title: "EDUCATION TECHNOLOGY",
    image: educationBg,
    description: "Revolutionize education with RABS' cutting-edge EdTech solutions, redefining learning experiences for the modern world. Empower educators and learners with transformative digital tools that transcend traditional boundaries.",
    icon: educationIcon,
  },
  {
    title: "FOOD INDUSTRY",
    image: foodBg,
    description: "Savor success online! RABS whips up visually appetizing websites for the food industry, seamlessly blending flavors of design and functionality to leave a lasting impression on your customers.",
    icon: foodIcon,
  },
  {
    title: "TELECOMMUNICATIONS",
    image: telecomBg,
    description: "Connect with impact! RABS transforms telecommunications websites into dynamic platforms, ensuring seamless user interactions and showcasing your services with the speed and efficiency your industry demands.",
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
