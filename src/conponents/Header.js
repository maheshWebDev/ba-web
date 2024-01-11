// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: "#007BFF", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: "#FFFFFF" }}>
          Bharam Associates
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "#FFFFFF" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                style={{ color: "#FFFFFF" }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-link"
                style={{ color: "#FFFFFF" }}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/faqs"
                className="nav-link"
                style={{ color: "#FFFFFF" }}
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                style={{ color: "#FFFFFF" }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Header.js

const ContactBar = () => {
  const contactBarStyle = {
    background: "#f8f9fa", // Set a light background color
    padding: "10px 0", // Add some padding
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Add a subtle box shadow
  };

  const contactInfoStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    color: "#343a40", // Set text color
  };

  const iconStyle = {
    marginRight: "8px",
    color: "#007BFF", // Set icon color
  };

  return (
    <header style={contactBarStyle}>
      <div className="container">
        <div style={contactInfoStyle}>
          <div>
            <i className="fas fa-phone" style={iconStyle}></i>
            +919850524322
          </div>
          <div>
            <i className="fas fa-envelope" style={iconStyle}></i>
            info@gmail.com
          </div>
          <div>
            <i className="fas fa-map-marker-alt" style={iconStyle}></i>
            123 Main St, Pune
          </div>
        </div>
      </div>
    </header>
  );
};

const DoubleHeader = () => {
  return (
    <>
      <Navbar />
      <ContactBar />
    </>
  );
};

export default DoubleHeader;
