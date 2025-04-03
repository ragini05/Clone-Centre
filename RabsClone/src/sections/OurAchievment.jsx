import React from "react";
import "../styles/achieve.css";
import awardImage from "../assets/hero2.jpg"; // Importing image

const OurAchievement = () => {
  return (
    <section className="achievements">
      <h3 className="achievements-title">
        Our <span className="highlight">Achievements</span>
      </h3>

      <div className="achievement-container">
        <div className="achievement-frame">
          <img src={awardImage} alt="Achievement" className="achievement-img" />
        </div>

        <p className="achievement-text">
          "Received awards from the Honorable Chief Minister of Goa and the Governor of Sikkim"
        </p>
      </div>
    </section>
  );
};

export default OurAchievement;
