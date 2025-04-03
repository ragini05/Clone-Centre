import React from "react";
import "../styles/review.css";
import arrow from "../assets/arrow.png";

// Importing review images
import review1 from "../assets/1.JPG";
import review2 from "../assets/2.JPG";
import review3 from "../assets/3.JPG";
import review4 from "../assets/4.JPG";
import review5 from "../assets/5.JPG";
import review6 from "../assets/6.JPG";
import review7 from "../assets/7.JPG";
import review8 from "../assets/8.JPG";


const reviews = [review1, review2, review3, review4, review5, review6, review7, review8];

const Review = () => {
  return (
    <section className="review_section" id="review">
      {/* Background SVG */}
      <div className="bg-animation"></div>

      {/* Title */}
      <div className="col-12 text-center">
        <h3>
          Praise for <b>Precision</b> and <b>Performance</b>
        </h3>
      </div>
      <div className="col-12 text-center">
        <p className="review-subtitle">
          Here are some noteworthy recognitions and testimonials <br />
          that underscore our commitment to excellence.
        </p>
      </div>

      {/* Reviews */}
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`testimonial ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="testimonial-box">
              <img src={review} alt={`review${index + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Button */}
      <div className="hero-down-btn">
        <img src={arrow} className="arrow" alt="arrow" />
      </div>
    </section>
  );
};

export default Review;
