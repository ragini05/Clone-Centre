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
import bgImage from "../assets/review.png"; // Background image

const Review = () => {
  return (
    <section className="review_section" style={{ backgroundImage: `url(${bgImage})` }} id="review">
      {/* Header */}
      <div className="col-12 text-center">
        <h3>
          Praise for <b>Precision</b> and <b>Performance</b>
        </h3>
      </div>
      <div className="col-12 text-center">
        <p className="review-subtitle">
          Here are some noteworthy recognitions and testimonials
          <br className="d-none d-md-block d-lg-block" />
          that underscore our commitment to excellence.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 testimonial testimonial1">
            <div className="testimonial-box">
              <img src={review1} className="img-fluid center-block" alt="review1" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-8 testimonial testimonial2">
            <div className="testimonial-box">
              <img src={review2} className="img-fluid center-block" alt="review2" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-8 testimonial testimonial1">
            <div className="testimonial-box">
              <img src={review3} className="img-fluid center-block" alt="review3" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-8 testimonial testimonial2">
            <div className="testimonial-box">
              <img src={review4} className="img-fluid center-block" alt="review4" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-8 testimonial testimonial1">
            <div className="testimonial-box">
              <img src={review5} className="img-fluid center-block" alt="review5" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-8 testimonial testimonial2">
            <div className="testimonial-box">
              <img src={review6} className="img-fluid center-block" alt="review6" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-8 testimonial testimonial1">
            <div className="testimonial-box">
              <img src={review7} className="img-fluid center-block" alt="review7" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-8 testimonial testimonial2">
            <div className="testimonial-box">
              <img src={review8} className="img-fluid center-block" alt="review8" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="col-12 hero-down-btn">
          <img src={arrow} className="img-fluid mx-auto d-block arrow" alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default Review;
