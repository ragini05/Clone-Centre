import React, { useEffect, useRef } from "react";
import "../styles/services.css";

// Import icons and background images
import uiIcon from "../assets/ui.png";
import wordpressIcon from "../assets/wordpress.png";
import landingPageIcon from "../assets/landingpage.png";
import portfolioIcon from "../assets/portfolio.png";
import corporateIcon from "../assets/corporate.png";
import reactIcon from "../assets/reactjs.png";
import realEstateIcon from "../assets/realestate.png";

// Background images
import uiBg from "../assets/ui.jpg";
import wordpressBg from "../assets/wp.jpg";
import landingPageBg from "../assets/landing.jpg";
import portfolioBg from "../assets/portfolio.jpg";
import corporateBg from "../assets/corporate.jpg";
import reactBg from "../assets/react.jpg";
import realEstateBg from "../assets/realestate.jpg";

const servicesData = [
  {
    icon: uiIcon,
    title: "UI - UX Design",
    description:
      "Elevate user experiences with our UI/UX design expertise. Intuitive interfaces, seamless navigation, and visually captivating designs tailored to your brand.",
    bgImage: uiBg,
  },
  {
    icon: wordpressIcon,
    title: "WordPress Development",
    description:
      "Empower your online presence with our WordPress prowess. Customized themes, plugins, and seamless functionality for a standout and user-friendly website.",
    bgImage: wordpressBg,
  },
  {
    icon: landingPageIcon,
    title: "Landing Page Development",
    description:
      "Craft compelling first impressions. Our landing pages are designed for conversion, seamlessly guiding visitors to take desired actions with captivating visuals and intuitive user journeys.",
    bgImage: landingPageBg,
  },
  {
    icon: portfolioIcon,
    title: "Portfolio Website",
    description:
      "Showcase your work elegantly. Our portfolio websites combine sleek design with intuitive navigation, presenting your achievements in a visually compelling manner.",
    bgImage: portfolioBg,
  },
  {
    icon: corporateIcon,
    title: "Corporate Websites",
    description:
      "Make a powerful online statement with our corporate website solutions. Professional design, robust functionality, and seamless navigation for an impactful digital presence.",
    bgImage: corporateBg,
  },
  {
    icon: reactIcon,
    title: "PHP & React Website",
    description:
      "Harness the power of PHP and React for dynamic and scalable websites. Our solutions blend server-side efficiency with interactive, client-side experiences.",
    bgImage: reactBg,
  },
  {
    icon: realEstateIcon,
    title: "Real Estate and Developers Website",
    description:
      "Transform property listings into experiences. Our real estate websites offer intuitive navigation, immersive visuals, and powerful features for seamless property exploration.",
    bgImage: realEstateBg,
  },
];

const Services = () => {
  const serviceRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px", 
      threshold: 0.15,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animating class first for smoother transition
          entry.target.classList.add("animating");
          
          // Use setTimeout to add active class after a slight delay
          setTimeout(() => {
            entry.target.classList.add("active");
            entry.target.classList.remove("inactive");
          }, 50);
        } else {
          // For exiting the viewport, first remove active and add exiting
          entry.target.classList.remove("active");
          entry.target.classList.add("exiting");
          
          // Then after animation duration, add inactive and remove exiting
          setTimeout(() => {
            entry.target.classList.add("inactive");
            entry.target.classList.remove("exiting", "animating");
          }, 1000); // Half of the animation duration
        }
      });
    }, observerOptions);

    serviceRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current.observe(ref);
        // Add initial inactive class
        ref.classList.add("inactive");
      }
    });

    return () => {
      if (observerRef.current) {
        serviceRefs.current.forEach((ref) => {
          if (ref) observerRef.current.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section className="serviceweoffer" id="services">
      <h1 className="rabs-services-heading">Services We Offer</h1>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            className="service-container"
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
          >
            <div className="service-left">
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
              <p className="service-description">{service.description}</p>
            </div>
            <div
              className="service-bg"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            >
              <h2>{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;