import React, { useEffect } from "react";
import "../styles/approach.css";
import paperPlane from "../assets/plane.svg";
import understandingVision from "../assets/understanding your vision.svg";
import strategicPlanning from "../assets/strategic-planning.svg";
import creativeDesign from "../assets/creative.svg";
import development from "../assets/strategic-planning.svg";
import launch from "../assets/launch.svg";
import arrow from "../assets/arrow.png";

const OurApproach = () => {
  useEffect(() => {
    const path = document.querySelector(".svg-path");
    const airplane = document.getElementById("paperplane");

    if (path && airplane) {
      const pathLength = path.getTotalLength();

      const movePlane = () => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollY / maxScroll;

        const point = path.getPointAtLength(progress * pathLength);
        airplane.style.transform = `translate(${point.x}px, ${point.y}px) rotate(10deg)`;
      };

      window.addEventListener("scroll", movePlane);
      return () => window.removeEventListener("scroll", movePlane);
    }
  }, []);

  return (
    <section className="ourapproach" id="approach">
      <div className="container-fluid">
        <h3 className="approach-heading">
          Our Client-Centric Approach to <br />
          <span className="highlight">WEB DEVELOPMENT</span> Success
        </h3>
      </div>

      <div className="svg-container">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 26667 60000"
        >
          <g id="Layer_x0020_1">
            <path
              className="svg-path"
              d="M24719 1930c0,0 -23062,641 -22368,8699 584,6798 21907,1087 22076,7091 365,13011 -21345,2046 -22392,8721 -1702,10863 21953,3705 21514,10966 -524,8676 -20398,4588 -20687,9187 -731,11623 7456,11842 20541,11330"
              fill="none"
              stroke="lightblue"
              strokeWidth="15"
            />
          </g>
        </svg>
      </div>

      <img src={paperPlane} id="paperplane" alt="paper plane" className="plane-animation" />

      {/** Steps Section */}
      <Step
        id="understand_vision"
        number="1"
        title="Understanding Your Vision"
        imgSrc={understandingVision}
        paragraphs={[
          "We begin by engaging with you to comprehend your vision and goals for the website.",
          "This initial step lays the foundation for a project that aligns seamlessly with your objectives.",
          "It's like building a lively online home that shouts 'you' in every click!",
        ]}
      />

      <Step
        id="strategic_planning"
        number="2"
        title="Strategic Planning"
        imgSrc={strategicPlanning}
        paragraphs={[
          "Now that we've nailed down your goals, it's strategy party time!",
          "This dynamic approach ensures your website isn't just up to snuff but is a trendsetter.",
          "From concept to completion, our focus remains on turning your vision into a vibrant reality.",
        ]}
      />

      <Step
        id="creative"
        number="3"
        title="Creative Design and User Experience"
        imgSrc={creativeDesign}
        paragraphs={[
          "Our design phase focuses on creating visually appealing and user-friendly interfaces.",
          "We enhance user engagement with strategic interactive elements—animations, transitions, and micro-interactions.",
          "We Unleash Vibrancy Through Dynamic Interactions!",
        ]}
      />

      <Step
        id="development"
        number="4"
        title="Development with Precision"
        imgSrc={development}
        paragraphs={[
          "Armed with a solid plan and captivating design, our development team dives into the coding process.",
          "We place a strong emphasis on security, implementing robust measures to safeguard your website.",
          "We deliver a flawless product, setting the stage for easy future upgrades and maintenance.",
        ]}
      />

      <Step
        id="launch_improvement"
        number="5"
        title="Launch and Continuous Improvement"
        imgSrc={launch}
        paragraphs={[
          "The launch of your website is not the end of our commitment.",
          "We keep your website dynamic by updating information, adding features, and aligning content with industry trends.",
          "Unleashing Digital Dynamism: Fresh, Relevant, Forever Captivating!",
        ]}
      />

      <div className="hero-down-btn">
        <img src={arrow} className="arrow" alt="arrow" />
      </div>
    </section>
  );
};

const Step = ({ id, number, title, imgSrc, paragraphs }) => {
  return (
    <section className="row step-section" id={id}>
      <div>
        <h1 className="step-title">{`${number}. ${title}`}</h1>
        <div className="approach-title row">
          <img src={imgSrc} className="step-img col-lg-5 col-md-5 col-sm-12" alt={title} />
          <div className="col-lg-7 col-md-7 col-sm-12">
            {paragraphs.map((para, index) => (
              <p className="approach-para" key={index}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
