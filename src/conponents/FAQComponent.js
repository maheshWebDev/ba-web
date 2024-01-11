import React from "react";
import { Link } from "react-router-dom";

const FAQComponent = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          <div
            className="section_heading text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h3>
              <span>Frequently </span> Asked Questions
            </h3>
            <p>
              Get answers to common questions about our services and platform.
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="accordion" id="faqAccordion">
        {/* FAQ Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What services do you offer?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>
                We offer a range of financial services, including tax advisory,
                strategic consulting, audit and assurance, outsourcing,
                training, and more. Explore our services page for detailed
                information.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can I contact your support team?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>
                You can reach our support team by visiting the Contact Us page
                on our website. We are available via email, phone, and our
                online form.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Are your services available internationally?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>
                Yes, our services are available internationally. Whether you're
                located in India or any other part of the world, we can assist
                you with your financial needs.
              </p>
            </div>
          </div>
        </div>

        {/* Add more FAQ items as needed */}
      </div>

      {/* Support Button */}
      <div className="text-center mt-4">
        <i className="lni-emoji-sad"></i>
        <p className="mb-0 px-2">Can't find your answers?</p>
        <Link to="/Contact-us"> Contact us</Link>
      </div>
    </div>
  );
};

export default FAQComponent;
