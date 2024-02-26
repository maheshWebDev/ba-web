import React, { useState, useEffect } from "react";
import banner1 from "../banner11.jpg";
import banner2 from "../banner22.jpg";
import banner3 from "../banner33.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-zoom">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <img src={banner1} className="d-block w-100" alt="First slide" />
          <div className="custom-carousel-caption text-center">
            <h2>Your Financial Journey Starts Here</h2>
            <p>
              Unlock the path to financial freedom with our expert guidance and
              personalized solutions.
            </p>
            <button type="button" className="btn btn-outline-success mt-3">
              Contact Us
            </button>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <img src={banner2} className="d-block w-100" alt="Second slide" />
          <div className="custom-carousel-caption text-center">
            <h2>Expert Tax Advisory Services</h2>
            <p>
              Maximize your savings and minimize tax liabilities with our
              specialized tax advisory services tailored to your needs.
            </p>
            <button type="button" className="btn btn-outline-success mt-3">
              Contact Us
            </button>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <img src={banner3} className="d-block w-100" alt="Third slide" />
          <div className="custom-carousel-caption text-center">
            <h2>Your Financial Goals, Our Priority</h2>
            <p>
              Let us help you achieve your financial aspirations with
              comprehensive planning and strategic solutions focused on your
              success.
            </p>
            <button type="button" className="btn btn-outline-success mt-3">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => goToSlide((activeIndex + 2) % 3)} // Go to previous slide
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => goToSlide((activeIndex + 1) % 3)} // Go to next slide
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
