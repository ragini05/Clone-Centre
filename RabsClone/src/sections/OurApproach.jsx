import React, { useEffect, useState } from "react";
import "../styles/approach.css";
import paperPlane from "../assets/plane.svg";
import understandingVision from "../assets/understanding your vision.svg";
import strategicPlanning from "../assets/strategic-planning.svg";
import creativeDesign from "../assets/creative.svg";
import development from "../assets/strategic-planning.svg";
import launch from "../assets/launch.svg";
import arrow from "../assets/arrow.png";

const OurApproach = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const path = document.querySelector("#path");
    const paperplane = document.getElementById("paperplane");

    if (path && paperplane) {
      const pathLength = path.getTotalLength();
      
      // Set initial position of plane
      const initialPoint = path.getPointAtLength(0);
      paperplane.style.transform = `translate3d(${initialPoint.x}px, ${initialPoint.y}px, 0) rotate(5deg)`;

      const handleScroll = () => {
        // Update scroll position for background color effect
        setScrollPosition(window.scrollY);
        
        // Calculate scroll progress (0 to 1)
        const scrollPercentage = Math.min(1, Math.max(0, window.scrollY / 
          (document.documentElement.scrollHeight - window.innerHeight)));
        
        // Get point along the path based on scroll percentage
        const point = path.getPointAtLength(scrollPercentage * pathLength);
        
        // Calculate rotation angle based on the path direction
        const prevPoint = path.getPointAtLength(Math.max(0, (scrollPercentage * pathLength) - 10));
        const nextPoint = path.getPointAtLength(Math.min(pathLength, (scrollPercentage * pathLength) + 10));
        
        // Calculate angle in degrees
        const angle = Math.atan2(nextPoint.y - prevPoint.y, nextPoint.x - prevPoint.x) * (180 / Math.PI);
        
        // Apply transform to move and rotate the plane
        paperplane.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) rotate(${angle}deg)`;
      };

      // Initial position
      handleScroll();
      
      // Add scroll event listener with throttling to improve performance
      let lastScrollTime = 0;
      const scrollThrottleDelay = 10; // ms
      
      const throttledScroll = () => {
        const now = Date.now();
        if (now - lastScrollTime >= scrollThrottleDelay) {
          lastScrollTime = now;
          handleScroll();
        }
      };
      
      window.addEventListener("scroll", throttledScroll);
      
      // Clean up event listener
      return () => {
        window.removeEventListener("scroll", throttledScroll);
      };
    }
  }, []);

  // Calculate gradient background based on scroll position
  const getBackgroundStyle = () => {
    // Base colors
    const startColor = { r: 40, g: 58, b: 120 }; // rgb(40, 58, 120)
    const endColor = { r: 25, g: 55, b: 109 }; // rgb(25, 55, 109)
    
    // Max scroll value where color transition completes
    const maxScroll = 1500;
    const scrollRatio = Math.min(1, scrollPosition / maxScroll);
    
    // Interpolate between colors
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollRatio);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollRatio);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollRatio);
    
    return {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: "#ffffff",
    };
  };

  return (
    <section className="ourapproach" id="approach" style={getBackgroundStyle()}>
      <div className="container-fluid">
        <h3 className="w-100 approach-heading">
          Our Client-Centric Approach to <br />
          <span className="highlight">WEB DEVELOPMENT</span> Success
        </h3>
      </div>
      
      <div className="svg-container">
        <svg 
          className="svg" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          xmlSpace="preserve" 
          width="100%" 
          height="100%" 
          version="1.1" 
          viewBox="0 0 26667 60000"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path 
              id="path" 
              d="M24719 1930c0,0 -23062,641 -22368,8699 584,6798 21907,1087 22076,7091 365,13011 -21345,2046 -22392,8721 -1702,10863 21953,3705 21514,10966 -524,8676 -20398,4588 -20687,9187 -731,11623 7456,11842 20541,11330"
              fill="none"
              stroke="rgba(173, 216, 230, 0.3)"
              strokeWidth="15"
            />
          </g>
        </svg>
      </div>
      
      <img 
        src={paperPlane} 
        id="paperplane" 
        alt="Paper plane" 
        className="plane-img"
      />

      <Step
        id="understand_vision"
        number="1"
        title="Understanding Your Vision"
        imgSrc={understandingVision}
        paragraphs={[
          "We begin by engaging with you to comprehend your vision and goals for the website. Through detailed discussions, we gather insights into your business, target audience, and specific requirements. This initial step lays the foundation for a project that aligns seamlessly with your objectives.",
          "This collaborative exploration ensures that the end result is a finely tuned digital embodiment of your unique vision, providing an immersive and resonant experience for your audience.",
          "It's like building a lively online home that shouts \"you\" in every click!"
        ]}
      />

      <Step
        id="strategic_planning"
        number="2"
        title="Strategic Planning"
        imgSrc={strategicPlanning}
        paragraphs={[
          "Now that we've nailed down your goals, it's strategy party time! Our expert team huddles up to sketch out a detailed plan. We define the project's scope, mark key milestones, and set timelines in stone. This thoughtful strategy not only ensures a structured development process but also lays the groundwork for a victorious outcome. It's like creating a treasure map to success for your project!",
          "This dynamic approach ensures your website isn't just up to snuff but is a trendsetter, delivering an experience that sings to your audience.",
          "From concept to completion, our focus remains on turning your vision into a vibrant, engaging reality."
        ]}
      />

      <Step
        id="creative"
        number="3"
        title="Creative Design and User Experience"
        imgSrc={creativeDesign}
        paragraphs={[
          "Our design phase focuses on creating visually appealing and user-friendly interfaces. We prioritize an intuitive user experience, incorporating modern design trends while ensuring compatibility across various devices. This step ensures that your website not only looks impressive but also engages visitors effectively.",
          "We enhance user engagement with strategic interactive elements—animations, transitions, and micro-interactions. These not only boost visual appeal but also provide meaningful feedback, creating a dynamic and enjoyable website interaction.",
          "We Unleash Vibrancy Through Dynamic Interactions!"
        ]}
      />

      <Step
        id="development"
        number="4"
        title="Development with Precision"
        imgSrc={development}
        paragraphs={[
          "Armed with a solid plan and captivating design, our development team dives into the coding process. We leverage the latest technologies and best practices to bring your website to life. Regular testing and quality assurance checks are integral to our development process, guaranteeing a robust and error-free final product.",
          "We place a strong emphasis on security, implementing robust measures to safeguard your website and user data.",
          "We deliver a flawless product, setting the stage for easy future upgrades and maintenance."
        ]}
      />

      <Step
        id="launch_improvement"
        number="5"
        title="Launch and Continuous Improvement"
        imgSrc={launch}
        paragraphs={[
          "The launch of your website is not the end of our commitment. We monitor its performance closely and gather user feedback to make necessary improvements. Our aim is to ensure that your website remains up-to-date, secure, and aligned with evolving industry standards.",
          "We keep your website dynamic by updating information, adding features, and aligning content with industry trends to captivate your audience.",
          "Unleashing Digital Dynamism: Fresh, Relevant, Forever Captivating!"
        ]}
      />

      <div className="col-12 hero-down-btn">
        <img src={arrow} className="img-fluid mx-auto d-block arrow" alt="arrow" />
      </div>
    </section>
  );
};

const Step = ({ id, number, title, imgSrc, paragraphs }) => {
  return (
    <section className="row step-section" id={id} data-step={number}>
      <div>
        <h1 className="col-lg-12 col-md-12 col-sm-12 pb-lg-5 pb-md-5 pb-sm-3">{number}. {title}</h1>
        <div className="approach_title row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-sx-12 mb-3 mb-md-0">
            <img src={imgSrc} className="img-fluid step-image" alt={title} />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-sx-12">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="approach_para">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;