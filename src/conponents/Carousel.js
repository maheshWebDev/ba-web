import React from "react";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image3} className="d-block w-100" alt="First slide" />
          <div className="custom-carousel-caption text-center">
            <h2>Your Financial Journey Starts Here</h2>
            <p>Expert guidance for a secure and prosperous future.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Second slide" />
          <div className="custom-carousel-caption text-center">
            <h2>Expert Tax Advisory Services</h2>
            <p>
              Your financial journey starts with our expert guidance for a
              secure and prosperous future.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Third slide" />
          <div className="custom-carousel-caption text-end">
            <h2>Your Financial Goals, Our Priority</h2>
            <p>Comprehensive planning for a financially secure tomorrow.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
