import React from "react";
import img from "../image2.jpg";

const AboutUs = () => {
  return (
    <section className="container my-5 py-4">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <img
            src={img}
            alt="About Us"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-lg-6 order-lg-1">
          <h2 className="display-4 mb-4">About Us</h2>
          <p className="lead">
            Welcome to Bharam Associates, your trusted partner in navigating the
            complex world of financial strategies and tax advisory. Our journey
            is rooted in a commitment to providing expert guidance and
            innovative solutions to ensure your financial success.
          </p>
          <p>
            At Bharam Associates, we believe in delivering excellence through a
            combination of experience, strategic vision, and a client-centric
            approach. Our team of seasoned professionals, including Chartered
            Accountants and financial experts, is dedicated to understanding
            your unique needs and crafting tailored solutions that drive growth
            and prosperity.
          </p>
          <p>
            Whether you're seeking comprehensive tax advisory services,
            strategic consulting, audit and assurance, or outsourcing solutions,
            we have the expertise to meet your requirements. Our commitment goes
            beyond services – we strive to build lasting relationships based on
            trust, integrity, and a shared vision for your financial well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
